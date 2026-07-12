import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const commissions = pgTable("commissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  occasion: varchar("occasion", { length: 100 }).notNull(),
  customOccasion: text("custom_occasion"),
  category: varchar("category", { length: 100 }).notNull(),
  artworkType: varchar("artwork_type", { length: 100 }),
  story: text("story").notNull(),
  customization: text("customization"),
  budget: varchar("budget", { length: 100 }).notNull(),
  completionDate: varchar("completion_date", { length: 100 }).notNull(),
  message: text("message"),
  scheduleCall: varchar("schedule_call", { length: 10 }).notNull(), // "yes" | "no"
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
