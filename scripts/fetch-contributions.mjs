import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "src", "data", "contributions.json");

let token = process.env.GITHUB_TOKEN;
if (!token) {
  const serverEnv = join(ROOT, "server", ".env");
  if (existsSync(serverEnv)) {
    const content = readFileSync(serverEnv, "utf-8");
    token = content.match(/GITHUB_TOKEN=(.+)/)?.[1]?.trim();
  }
}

const USERNAME = "aryanpatel99";

const QUERY = `{
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

async function run() {
  if (!token) {
    console.error("No GITHUB_TOKEN — keeping existing data");
    process.exit(0);
  }

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY }),
  });

  if (!res.ok) {
    console.error(`GitHub GraphQL error ${res.status} — keeping existing data`);
    process.exit(0);
  }

  const json = await res.json();
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

  writeFileSync(OUT, JSON.stringify(contributions, null, 2));
  console.log(`✓ ${contributions.length} contributions written to src/data/contributions.json`);
}

run().catch((err) => {
  console.error("fetch-contributions failed:", err.message);
  process.exit(0);
});
