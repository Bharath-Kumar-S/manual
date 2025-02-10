import { quizResult } from "@/src/constants/quiz/results";

if (!quizResult) {
  throw new Error("quizResult is not defined. Please check your import.");
}

const { header, description = "", link, linkText, subTitle = "" } = quizResult;
const descriptionParts = description.split("LINK");

export const Success = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F3F7F4] text-black"
      role="status"
      aria-live="polite"
    >
      <header>
        <h1
          className="text-2xl font-bold block text-center mb-2"
          id="success-header"
        >
          {header}
        </h1>
      </header>
      <section>
        {subTitle && (
          <h2
            className="text-base font-semibold block text-center mb-2"
            id="success-subtitle"
          >
            {subTitle}
          </h2>
        )}
        <p
          className="text-sm font-medium block text-center mb-2"
          id="success-description"
        >
          {descriptionParts[0]}
          {link && linkText && (
            <>
              {" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
                aria-label={`Visit the link: ${linkText}`}
              >
                {linkText}
              </a>{" "}
            </>
          )}
          {descriptionParts[1] && descriptionParts[1]}
        </p>
      </section>
    </div>
  );
};

export default Success;
