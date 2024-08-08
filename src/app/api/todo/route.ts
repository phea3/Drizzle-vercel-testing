import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
  const todos = await db.select().from(todo);

  return NextResponse.json({ todos, message: "success" });
}
