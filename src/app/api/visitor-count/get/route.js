import { NextResponse } from "next/server";

async function getRedis(path) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  const res = await fetch(`${url}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  return (await res.json()).result;
}

export async function GET() {
  try {
    const count = await getRedis("/get/portfolio_visitor_count");
    return NextResponse.json({
      success: true,
      count: parseInt(count ?? 0, 10),
    });
  } catch (error) {
    console.error("Visitor count error:", error.message);
    return NextResponse.json(
      { success: false, count: 0 },
      { status: 500 }
    );
  }
}
