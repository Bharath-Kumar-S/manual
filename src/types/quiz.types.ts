type Option = {
  display: string;
  value: string | boolean;
  isRejection: boolean;
};

type Question = {
  question: string;
  type: "ChoiceType";
  options: Option[];
};

export type QuizData = {
  questions: Question[];
};
