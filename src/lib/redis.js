export const VISITOR_COUNT_KEY = "portfolio_visitor_count";

// Calls the Upstash REST API. Returns null when Redis isn't configured.
// Times out after 3s so a slow Upstash request can't hang the caller.
export async function redis(path, fetchOptions = { cache: "no-store" }) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const res = await fetch(`${url}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(3000),
    ...fetchOptions,
  });

  if (!res.ok) throw new Error(`Upstash error: ${res.status}`);
  const json = await res.json();
  return json.result;
}

// Current count for the page HTML, refreshed at most once a minute.
// Returns null on failure so the footer falls back to the client fetch.
export async function getCachedVisitorCount() {
  try {
    const count = await redis(`/get/${VISITOR_COUNT_KEY}`, { method: "GET", next: { revalidate: 60 } });
    const parsed = parseInt(count, 10);
    // Non-numeric or missing value: return null so the footer falls back to the client fetch
    return Number.isNaN(parsed) ? null : parsed;
  } catch (error) {
    console.error("Visitor count read error:", error.message);
    return null;
  }
}
