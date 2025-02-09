import { quizResult } from "@/src/constants/quiz/results";

if (!quizResult) {
  throw new Error("quizResult is not defined. Please check your import.");
}

const { header, description = "", link, linkText, subTitle = "" } = quizResult;
const descriptionParts = description.split("LINK"); // Split description at "LINK"

export const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F3F7F4] text-black">
      <p>
        <span className="text-2xl font-bold block text-center mb-2">
          {header}
        </span>
        {subTitle && (
          <span className="text-base font-semibold block text-center mb-2">
            {subTitle}
          </span>
        )}
        <span className="text-sm font-medium block text-center mb-2">
          {descriptionParts[0]}
          {link && linkText && (
            <>
              {" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {linkText}
              </a>{" "}
            </>
          )}
          {descriptionParts[1] && descriptionParts[1]}
        </span>
      </p>
    </div>
  );
};

export default Success;
