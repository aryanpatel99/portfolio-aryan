import { NextResponse } from "next/server";

const USERNAME = "aryanpatel99";

const GQL_QUERY = `{
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
}`;

let cache = null;
let lastFetch = 0;
const CACHE_TTL = 1000 * 60 * 10; // 10 min

export async function GET() {
  try {
    if (cache && Date.now() - lastFetch < CACHE_TTL) {
      return NextResponse.json({ success: true, contributions: cache });
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GQL_QUERY }),
    });

    if (!response.ok)
      throw new Error(`GitHub GraphQL error: ${response.status}`);

    const json = await response.json();
    const prs = json.data?.user?.pullRequests?.nodes ?? [];

    const contributions = prs
      .filter((pr) => pr.repository.owner.login !== USERNAME)
      .map((pr) => ({
        title: pr.title,
        description: `${pr.repository.owner.login}/${pr.repository.name}`,
        repository: pr.repository.owner.login,
        link: pr.url,
        date: new Date(pr.mergedAt).getFullYear().toString(),
        state: "merged",
      }));

    cache = contributions;
    lastFetch = Date.now();

    return NextResponse.json({ success: true, contributions });
  } catch (error) {
    console.error("🔥 GitHub error:", error.message);
    return NextResponse.json(
      { success: false, contributions: [] },
      { status: 500 }
    );
  }
}
