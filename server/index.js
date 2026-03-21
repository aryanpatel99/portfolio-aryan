const express = require('express');
const cors = require('cors');
const {Octokit} = require('@octokit/rest');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// ===== helper =====
function formatDate(dateString) {
  return new Date(dateString).getFullYear().toString();
}

// for simple caching
let cache = null;
let lastfetch = 0
const cacheTime = 1000*60*10 //10 min

app.get("/api/github-contributions", async (req, res) => {
  try {

    if(cache && Date.now() - lastfetch < cacheTime){
      return res.json({success:true, contributions: cache})
    }

    const username = req.query.username || "aryanpatel99";
    const rawLimit = parseInt(req.query.limit || "50");
    const limit = isNaN(rawLimit) ? 50 : Math.min(rawLimit, 100);

    const { data } = await octokit.request("GET /search/issues", {
      q: `is:pr author:${username} is:merged`,
      sort: "updated",
      order: "desc",
      per_page: limit,
    });

    const contributions = data.items.map((pr) => {
      const match = pr.html_url.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull/);
      const repoOwner = match ? match[1] : "unknown";

      return {
        title: pr.title,
        description: `Contributed to ${repoOwner}`,
        repository: repoOwner,
        link: pr.html_url,
        date: formatDate(pr.closed_at || pr.created_at),
        state: "merged",
      };
    });

    const external = contributions.filter((c)=> c.repository !== username);

    cache = external;
    lastfetch = Date.now();

    res.json({ success: true, contributions:external });
  } catch (error) {
    console.error("🔥 GitHub error:", error.status, error.message);
    res.status(500).json({ success: false, contributions: [] });
  }
})

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});