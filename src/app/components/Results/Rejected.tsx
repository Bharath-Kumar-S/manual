import { quizRejected } from "@/src/constants/quiz/rejected";

if (!quizRejected) {
  throw new Error("quizRejected is not defined. Please check your import.");
}

const { header, subTitle, description } = quizRejected;

const Rejected = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F3F7F4] text-black"
      role="alert"
      aria-live="assertive"
    >
      <header>
        <h1
          className="text-2xl font-bold block text-center mb-2"
          id="rejected-header"
        >
          {header}
        </h1>
      </header>
      <section>
        <h2
          className="text-base font-semibold block text-center mb-2"
          id="rejected-subtitle"
        >
          {subTitle}
        </h2>
        <p
          className="text-sm font-medium block text-center mb-2"
          id="rejected-description"
        >
          {description}
        </p>
      </section>
    </div>
  );
};

export default Rejected;
