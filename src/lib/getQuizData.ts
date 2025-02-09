import { headers } from "next/headers";

export async function getQuizData() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/questions`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch quiz data");
  }

  return response.json();
}
