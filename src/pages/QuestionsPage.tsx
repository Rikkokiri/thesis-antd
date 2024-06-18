import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "./QuestionsPage.css";
import { Button } from "../components/Button/Button";
import { FiArrowDown } from "react-icons/fi";
import { QuestionForm } from "../features/questionsForm";
import { CandidatesMatch } from "src/features/candidatesMatch";
import { getQuestionsTotalCount } from "@data/api";
import { useRef } from "react";
import { Flex, Typography } from "antd";
const { Title } = Typography;

export const QuestionsPage = () => {
  const { t } = useTranslation();
  const questionsTotalCount = getQuestionsTotalCount();
  const { ref, inView } = useInView({
    threshold: (1 / questionsTotalCount) * 1.5, // Reveal when half of second card is in view
  });
  const questionsStartRef = useRef<HTMLDivElement | null>(null);

  const PageHeaderStyles: React.CSSProperties = {
    width: "100%",
    textAlign: "center",
    backgroundColor: "var(--page-header-bg)",
    padding: "2rem 0",
  };

  return (
    <>
      {inView && <CandidatesMatch />}
      <Flex
        component="section"
        vertical
        align="center" /* className="question-page__header"*/
        style={PageHeaderStyles}
      >
        <p className="subtitle" style={{ margin: 0 }}>
          {t("electionName")}
        </p>
        <Title className="heading-1 question-page__title">
          {t("questionPage.findYourCandidate")}
        </Title>
        <p className="page-intro">{t("questionPage.description")}</p>

        <Button
          iconBefore={<FiArrowDown />}
          onClick={() => {
            console.log("Scroll to first question!");
            questionsStartRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {t("questionPage.findYourCandidate")}
        </Button>
        <div ref={questionsStartRef} />
      </Flex>
      <div className="question-page__content" ref={ref}>
        <QuestionForm />
      </div>
    </>
  );
};
