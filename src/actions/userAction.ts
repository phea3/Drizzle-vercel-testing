"use server";

import { users } from "@/db/schema";
import { db } from "@/db/drizzle";

export const getUser = async () => {
  const data = await db.select().from(users);
  return data;
};

export const addUser = async (id: number, name: string, email: string) => {
  await db.insert(users).values({
    id: id,
    name: name,
    email: email,
  });
};
