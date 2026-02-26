"use server";

import { checkUser } from "@/lib/checkUser";

const STRAP_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRPI_API_TOKEN = process.env.STRPI_API_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export async function scanPantryImage(formData) {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const isPro = user.subscriptionTier === "pro";

    // Apply Arcjet rate limit based on tier
  } catch (error) {}
}
