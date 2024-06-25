import "../styles/QuestionCard.css";
import { useTranslation } from "react-i18next";
import { ToggleButton } from "../../../components/ToggleButton/ToggleButton";
import { FiEyeOff } from "react-icons/fi";
import { Card, Tag, Typography } from "antd";
import { Category, Question } from "@data/types";
import { Answer } from "@stores/answerStore";
import { RadioQuestion } from "./RadioQuestion";
import { YesNoQuestion } from "./YesNoQuestion";
import { AdditionalInfo } from "./AdditionalInfo";
import { RowCentered } from "@layout/index";

const { Title, Text } = Typography;

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
    <Card
      bordered={false}
      classNames={{
        body: "question-card__body",
      }}
      style={{
        padding: "5rem 1.5rem",
        marginBottom: "1.5rem",
        width: "100%",
      }}
    >
      <RowCentered gap="1.5rem">
        <Tag bordered={false}>{`${questionNumber}/${questionsCount}`}</Tag>
        <Text className="category">{category.name.en}</Text>
      </RowCentered>
      <Title level={2} className="question">
        {question.question.en}
      </Title>
      <RowCentered style={{ marginTop: "6px", marginBottom: "18px" }}>
        {question.additionalInfo && (
          <AdditionalInfo t={t} info={question.additionalInfo} />
        )}
        <ToggleButton
          onClick={() => toggleQuestionHiding(question.id)}
          isToggled={!!answer?.hideQuestion}
          untoggledIcon={<FiEyeOff />}
          toggledIcon={<FiEyeOff />}
          type="text"
          toggledType="default"
          size="middle"
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
    </Card>
  );
};
