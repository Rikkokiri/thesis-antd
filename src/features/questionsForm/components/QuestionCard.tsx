import "../styles/QuestionCard.css";
import { useTranslation } from "react-i18next";
import { ToggleButton } from "../../../components/ToggleButton/ToggleButton";
import { FiEyeOff } from "react-icons/fi";
import { Tag } from "antd";
import { Category, Question } from "@data/types";
import { Answer } from "@stores/answerStore";
import { RadioQuestion } from "./RadioQuestion";
import { YesNoQuestion } from "./YesNoQuestion";
import { AdditionalInfo } from "./AdditionalInfo";
import { RowCentered } from "@layout/index";

interface ICardProps {
  category: Category;
  question: Question;
  answer: Answer | undefined;
  questionsCount: number;
  answerQuestion: (questionId: number, answer: number) => void;
  toggleQuestionHiding: (questionId: number) => void;
}

export const QuestionCard = (props: ICardProps) => {
  const {
    answer,
    question,
    category,
    questionsCount,
    answerQuestion,
    toggleQuestionHiding,
  } = props;
  const { t } = useTranslation();
  const questionId = question.id;
  const questionNumber = category.position + question.position + 1;

  return (
    <section className="card">
      <RowCentered gap="1.5rem">
        <Tag bordered={false}>{`${questionNumber}/${questionsCount}`}</Tag>
        <p className="category">{category.name.en}</p>
      </RowCentered>
      <h2 className="question">{question.question.en}</h2>
      <RowCentered style={{ marginTop: "6px", marginBottom: "18px" }}>
        {question.additionalInfo && (
          <AdditionalInfo t={t} info={question.additionalInfo} />
        )}
        <ToggleButton
          onClick={() => toggleQuestionHiding(question.id)}
          isToggled={!!answer?.hideQuestion}
          untoggledIcon={<FiEyeOff />}
          toggledIcon={<FiEyeOff />}
          variant="ghost"
          size="small"
        >
          {t("question.hide")}
        </ToggleButton>
      </RowCentered>
      {question.questionType === "yes-no" ? (
        <YesNoQuestion
          answerQuestion={answerQuestion}
          questionId={questionId}
          t={t}
          answer={answer?.answer ?? null}
        />
      ) : (
        <RadioQuestion
          questionId={questionId}
          answerQuestion={answerQuestion}
          t={t}
          value={answer?.answer ?? null}
        />
      )}
    </section>
  );
};
