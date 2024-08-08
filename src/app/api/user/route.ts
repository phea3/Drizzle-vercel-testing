import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
  const user = await db.select().from(users);

  return NextResponse.json({ user, message: "success" });
}
