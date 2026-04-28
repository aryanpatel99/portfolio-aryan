const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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

app.get("/api/github-contributions", async (_req, res) => {
  try {
    if (cache && Date.now() - lastFetch < CACHE_TTL) {
      return res.json({ success: true, contributions: cache });
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GQL_QUERY }),
    });

    if (!response.ok) throw new Error(`GitHub GraphQL error: ${response.status}`);

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

    res.json({ success: true, contributions });
  } catch (error) {
    console.error("🔥 GitHub error:", error.message);
    res.status(500).json({ success: false, contributions: [] });
  }
})

async function getRedis(path) {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  const res = await fetch(`${url}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  return (await res.json()).result;
}

app.get("/api/visitor-count", async (_req, res) => {
  try {
    const count = await getRedis("/incr/portfolio_visitor_count");
    res.json({ success: true, count: count ?? 0 });
  } catch (error) {
    console.error("Visitor count error:", error.message);
    res.status(500).json({ success: false, count: 0 });
  }
});

app.get("/api/visitor-count/get", async (_req, res) => {
  try {
    const count = await getRedis("/get/portfolio_visitor_count");
    res.json({ success: true, count: parseInt(count ?? 0, 10) });
  } catch (error) {
    console.error("Visitor count error:", error.message);
    res.status(500).json({ success: false, count: 0 });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});