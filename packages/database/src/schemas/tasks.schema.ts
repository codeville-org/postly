import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

import { timestamps } from "../utils/helpers";

export const tasks = pgTable("tasks", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  done: boolean("done").notNull().default(false),
  ...timestamps
});
