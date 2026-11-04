import { NextResponse } from "next/server";
import { redis, VISITOR_COUNT_KEY } from "@/lib/redis";

// Run next to the Upstash database (Mumbai)
export const preferredRegion = "bom1";

export async function GET(request) {
  try {
    const hasSession = request.cookies.has("portfolio_session");
    const isReadonly = request.nextUrl.searchParams.get("readonly") === "true";

    // If active session exists or explicitly requested as readonly, just read current count
    if (hasSession || isReadonly) {
      const current = await redis(`/get/${VISITOR_COUNT_KEY}`);
      const count = current !== null ? parseInt(current, 10) : 0;
      return NextResponse.json({ success: true, count, isNewSession: false });
    }

    // New session: increment counter and set a 2-hour session cookie
    const incremented = await redis(`/incr/${VISITOR_COUNT_KEY}`);
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
