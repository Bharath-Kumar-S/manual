import { Quiz } from "@/components/Quiz";
import { getQuizData } from "@/src/lib/getQuizData";

export default async function QuizPage() {
  const quizData = await getQuizData();

  return <Quiz quizData={quizData} />;
}
