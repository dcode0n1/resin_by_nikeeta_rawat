"use server";

import { db } from "@/db";
import { commissions } from "@/db/schema";
import { z } from "zod";

// Server-side Zod validation schema (matches CommissionClient's schema)
const commissionFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  occasion: z.string().min(1, "Please select an occasion"),
  customOccasion: z.string().optional(),
  category: z.string().min(1, "Please select a category"),
  artworkType: z.string().optional(),
  story: z.string().min(10, "Please share a story (at least 10 characters)"),
  customization: z.string().optional(),
  budget: z.string().min(1, "Please select a budget bracket"),
  completionDate: z.string().min(1, "Please select a preferred completion date"),
  message: z.string().optional(),
  scheduleCall: z.enum(["yes", "no"]),
});

export async function submitCommission(data: z.infer<typeof commissionFormSchema>) {
  try {
    // 1. Validate data on the server
    const validatedData = commissionFormSchema.parse(data);

    // 2. Insert validated data into the Neon database
    const [inserted] = await db
      .insert(commissions)
      .values({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        occasion: validatedData.occasion,
        customOccasion: validatedData.customOccasion || null,
        category: validatedData.category,
        artworkType: validatedData.artworkType || null,
        story: validatedData.story,
        customization: validatedData.customization || null,
        budget: validatedData.budget,
        completionDate: validatedData.completionDate,
        message: validatedData.message || null,
        scheduleCall: validatedData.scheduleCall,
      })
      .returning();

    return { success: true, data: inserted };
  } catch (error) {
    console.error("Failed to save commission to database:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
