import "../styles/AnswerList.css";
import { useState } from "react";
import { Card, Divider } from "antd";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { RowCentered } from "@layout/index";

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, candidateAnswers, candidateImgSrc } = props;
  const [isExpanded, setExpanded] = useState(false);
  const questionsToShow = isExpanded ? questions : [questions[0]];

  return (
    <article className="answer-list">
      <Card
        title={t("candidateSections.answers")}
        bordered={false}
        classNames={{
          body: "answer-list__card-body",
        }}
      >
        <>
          {questionsToShow.map((question) => (
            <AnswerCard
              key={question.id}
              question={question}
              candidateAnswer={
                candidateAnswers[question.id] ?? { answer: null }
              }
              questionsCount={questions.length}
              candidateImgSrc={candidateImgSrc}
            />
          ))}
        </>

        <Divider
          style={{
            width: "calc(100% - 2 * 24px)",
            minWidth: "fit-content",
            margin: "0 auto",
            borderColor: "var(--separator)",
          }}
        />
        <RowCentered style={{ padding: 24 }}>
          <ToggleButton
            classNames={{
              icon: "icon-24",
            }}
            isToggled={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
            toggledIcon={<FiMinus />}
            untoggledIcon={<FiPlus />}
            toggleStyle="stateless"
          >
            {isExpanded ? t("showFewer") : t("showMore")}
          </ToggleButton>
        </RowCentered>
      </Card>
    </article>
  );
};
