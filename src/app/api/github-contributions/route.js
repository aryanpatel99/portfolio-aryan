import { NextResponse } from "next/server";
import staticContributions from "@/data/contributions.json";

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

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    // Fall back to pre-bundled data if no token configured
    return NextResponse.json({
      success: true,
      contributions: staticContributions,
      source: "fallback",
    });
  }

  try {
    // Native Next.js ISR: cached with 1-hour background revalidation and cache tag
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-aryan",
      },
      body: JSON.stringify({ query: GQL_QUERY }),
      next: {
        revalidate: 3600, // Revalidate in background every 1 hour
        tags: ["github-contributions"],
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL error: ${response.status}`);
    }

    const json = await response.json();

    if (json.errors) {
      throw new Error(json.errors[0]?.message || "GraphQL error");
    }

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

    return NextResponse.json({
      success: true,
      contributions: contributions.length > 0 ? contributions : staticContributions,
      source: "github",
    });
  } catch (error) {
    console.error("GitHub contributions fetch error:", error.message);
    // Graceful fallback to static contributions rather than blank screen
    return NextResponse.json({
      success: true,
      contributions: staticContributions,
      source: "fallback-on-error",
      error: error.message,
    });
  }
}
