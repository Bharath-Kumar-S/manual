import { quizData } from "@/src/data/quizData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(quizData);
}
