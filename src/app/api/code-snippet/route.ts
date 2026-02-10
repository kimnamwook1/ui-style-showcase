import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const DEMO_DIRS: Record<string, string> = {
  general: "general",
  landing: "landing",
  dashboard: "dashboard",
};

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  // Try each category directory
  for (const dir of Object.values(DEMO_DIRS)) {
    const filePath = join(
      process.cwd(),
      "src",
      "demos",
      dir,
      `${slug}.tsx`
    );

    if (existsSync(filePath)) {
      const code = await readFile(filePath, "utf-8");
      return NextResponse.json({ code, slug });
    }
  }

  return NextResponse.json({ code: null, slug });
}
