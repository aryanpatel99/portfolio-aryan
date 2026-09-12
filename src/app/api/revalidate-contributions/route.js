import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.REVALIDATION_SECRET;

  if (expectedSecret && secret !== expectedSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidateTag("github-contributions");
    return NextResponse.json({
      revalidated: true,
      tag: "github-contributions",
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const secret = request.nextUrl.searchParams.get("secret");
    const authHeader = request.headers.get("authorization");
    const expectedSecret = process.env.REVALIDATION_SECRET;

    if (expectedSecret) {
      const isAuthorized =
        secret === expectedSecret || authHeader === `Bearer ${expectedSecret}`;
      if (!isAuthorized) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
      }
    }

    revalidateTag("github-contributions");
    return NextResponse.json({
      revalidated: true,
      tag: "github-contributions",
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
