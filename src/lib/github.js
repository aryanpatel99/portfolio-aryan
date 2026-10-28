import staticContributions from "@/data/contributions.json";

const USERNAME = "aryanpatel99";

// Team project repos, not open source contributions
const EXCLUDED_OWNERS = ["Abhayanthk", "Srijan76-code", "Arya756"];

// Both fetches share this tag, so /api/revalidate-contributions refreshes them together
const CACHE = { revalidate: 3600, tags: ["github-contributions"] };

const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

async function queryGitHub(query, variables) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "portfolio-aryan",
    },
    body: JSON.stringify({ query, variables }),
    next: CACHE,
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL error: ${response.status}`);
  }

  const json = await response.json();
  if (json.errors) {
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }
  return json.data;
}

// Merged PRs to other people's repos. Falls back to the copy saved at build time.
export async function getContributions() {
  try {
    const data = await queryGitHub(`{
      user(login: "${USERNAME}") {
        pullRequests(first: 50, states: MERGED, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            title
            url
            mergedAt
            repository {
              owner { login }
              name
            }
          }
        }
      }
    }`);

    const contributions = (data?.user?.pullRequests?.nodes ?? [])
      .filter((pr) => pr.repository.owner.login !== USERNAME && !EXCLUDED_OWNERS.includes(pr.repository.owner.login))
      .map((pr) => ({
        title: pr.title,
        description: `${pr.repository.owner.login}/${pr.repository.name}`,
        repository: pr.repository.owner.login,
        link: pr.url,
        date: new Date(pr.mergedAt).getFullYear().toString(),
        state: "merged",
      }));

    return contributions.length > 0 ? contributions : staticContributions;
  } catch (error) {
    console.error("GitHub contributions fetch error:", error.message);
    return staticContributions;
  }
}

// This year's contribution calendar, padded to Dec 31 like GitHub's profile graph.
// Returns null on failure so the client can fall back to fetching it itself.
export async function getContributionCalendar() {
  try {
    const year = new Date().getUTCFullYear();
    const data = await queryGitHub(
      `query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays { date contributionCount contributionLevel }
              }
            }
          }
        }
      }`,
      { login: USERNAME, from: `${year}-01-01T00:00:00Z`, to: `${year}-12-31T23:59:59Z` },
    );

    const weeks = data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (!weeks) return null;

    const counted = new Map(
      weeks
        .flatMap((week) => week.contributionDays)
        .map((day) => [day.date, { count: day.contributionCount, level: LEVELS[day.contributionLevel] ?? 0 }]),
    );

    const days = [];
    for (let d = new Date(Date.UTC(year, 0, 1)); d.getUTCFullYear() === year; d.setUTCDate(d.getUTCDate() + 1)) {
      const date = d.toISOString().slice(0, 10);
      days.push({ date, ...(counted.get(date) ?? { count: 0, level: 0 }) });
    }
    return days;
  } catch (error) {
    console.error("GitHub calendar fetch error:", error.message);
    return null;
  }
}
