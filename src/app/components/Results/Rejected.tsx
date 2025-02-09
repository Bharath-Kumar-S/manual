import { quizRejected } from "@/src/constants/quiz/rejected";

if (!quizRejected) {
  throw new Error("quizRejected is not defined. Please check your import.");
}

const { header, subTitle, description } = quizRejected;

const Rejected = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F3F7F4] text-black">
      <p>
        <span className="text-2xl font-bold block text-center mb-2">
          {header}
        </span>
        <span className="text-base font-semibold block text-center mb-2">
          {subTitle}
        </span>
        <span className="text-sm font-medium block text-center mb-2">
          {description}
        </span>
      </p>
    </div>
  );
};

export default Rejected;
