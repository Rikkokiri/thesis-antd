import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { FiArrowDown } from "react-icons/fi";
import { QuestionForm } from "../features/questionsForm";
import { CandidatesMatch } from "src/features/candidatesMatch";
import { getQuestionsTotalCount } from "@data/api";
import { useRef } from "react";
import { Button, Flex, Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
const { Text, Title } = Typography;

const PageIntro = (props: TextProps) => {
  return (
    <Text
      className="page-intro"
      style={{ margin: "1rem 1rem 2rem", lineHeight: 1.5, maxWidth: "680px" }}
    >
      {props.children}
    </Text>
  );
};

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
        <Text className="subtitle" style={{ margin: 0 }}>
          {t("electionName")}
        </Text>
        <Title
          level={1}
          style={{ lineHeight: 1.3, fontWeight: 900 }}
          className="heading-1"
        >
          {t("questionPage.findYourCandidate")}
        </Title>
        <PageIntro>{t("questionPage.description")}</PageIntro>
        <Button
          icon={<FiArrowDown />}
          type="primary"
          size="large"
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
      <Flex
        vertical
        align="center"
        style={{ width: "100%", paddingTop: 24 }}
        ref={ref}
      >
        <QuestionForm />
      </Flex>
    </>
  );
};
