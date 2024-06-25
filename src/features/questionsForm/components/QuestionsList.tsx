import { QuestionCard } from "./QuestionCard";
import { IQuestionsForm } from "../hooks/useQuestionsForm";
import { Question } from "src/data/types";
import { Flex } from "antd";

export const QuestionsList = (props: IQuestionsForm) => {
  const { categoriesAndQuestions, questionsTotalCount, answers } = props;

  return (
    <section style={{ width: "100%" }}>
      {categoriesAndQuestions.map((category) => (
        <Flex vertical align="center" key={category.id}>
          {category.questions.map((question: Question) => (
            <QuestionCard
              key={question.id}
              category={category}
              question={question}
              answer={answers[question.id]}
              questionsCount={questionsTotalCount}
              answerQuestion={props.answerQuestion}
              toggleQuestionHiding={props.toggleQuestionHiding}
            />
          ))}
        </Flex>
      ))}
      {/* TODO: Link to results page */}
    </section>
  );
};
