import { integer, text, boolean, pgTable, serial } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const users = pgTable("user", {
  id: serial("id").notNull().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});
