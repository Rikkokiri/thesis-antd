import "../styles/AnswerCard.css";
import { useTranslation } from "react-i18next";
import { Tag, Typography } from "antd";
import { Question } from "@data/types";
import { RadioAnswer } from "./RadioAnswer";
import { YesOrNoAnswer } from "./YesOrNoAnswer";
import { CandidateAnswer } from "@data/candidateAnswers";
import { CommentCard } from "./CommentCard";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { getAnswerByQuestionId } from "@stores/answerStore";
import { RowCentered } from "@layout/index";
const { Title } = Typography;

interface ICardProps {
  question: Question;
  candidateAnswer: CandidateAnswer;
  questionsCount: number;
  candidateImgSrc: string;
}

export const AnswerCard = (props: ICardProps) => {
  const { candidateAnswer, question, questionsCount } = props;
  const { t } = useTranslation();
  const { localize } = useLocalizedString();
  const questionId = question.id;

  const candidateComment = candidateAnswer?.comment
    ? localize(candidateAnswer.comment)
    : undefined;

  const userAnswer = getAnswerByQuestionId(question.id);

  return (
    <section className="answer-card">
      <RowCentered>
        <Tag
          bordered={false}
          className="tag-negative"
        >{`${question.position}/${questionsCount}`}</Tag>
      </RowCentered>
      <Title level={2} className="question">
        {question.question.en}
      </Title>
      {question.questionType === "yes-no" ? (
        <YesOrNoAnswer
          questionId={questionId}
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={props.candidateImgSrc}
        />
      ) : (
        <RadioAnswer
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={props.candidateImgSrc}
        />
      )}
      {candidateComment && (
        <CommentCard
          header={"Candidate name"} // TODO: Pass candidate's name
          body={candidateComment}
          questionType={question.questionType}
          answer={candidateAnswer?.answer}
        />
      )}
    </section>
  );
};
