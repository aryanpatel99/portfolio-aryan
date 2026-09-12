import { NextResponse } from "next/server";

async function queryRedis(path) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const res = await fetch(`${url}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Upstash error: ${res.status}`);
  const json = await res.json();
  return json.result;
}

export async function GET(request) {
  try {
    const hasSession = request.cookies.has("portfolio_session");
    const isReadonly = request.nextUrl.searchParams.get("readonly") === "true";

    // If active session exists or explicitly requested as readonly, just read current count
    if (hasSession || isReadonly) {
      const current = await queryRedis("/get/portfolio_visitor_count");
      const count = current !== null ? parseInt(current, 10) : 0;
      return NextResponse.json({ success: true, count, isNewSession: false });
    }

    // New session: increment counter and set a 2-hour session cookie
    const incremented = await queryRedis("/incr/portfolio_visitor_count");
    const count = incremented !== null ? parseInt(incremented, 10) : 0;

    const response = NextResponse.json({
      success: true,
      count,
      isNewSession: true,
    });

    // 2-hour session window (7200s) to prevent spam while tracking genuine visits
    response.cookies.set("portfolio_session", "1", {
      maxAge: 7200,
      path: "/",
      sameSite: "lax",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.error("Visitor count error:", error.message);
    return NextResponse.json(
      { success: false, count: 0, error: error.message },
      { status: 500 }
    );
  }
}
