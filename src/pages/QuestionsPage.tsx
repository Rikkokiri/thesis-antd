import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { FiArrowDown } from "react-icons/fi";
import { QuestionForm } from "../features/questionsForm";
import { CandidatesMatch } from "src/features/candidatesMatch";
import { getQuestionsTotalCount } from "@data/api";
import { useEffect, useRef } from "react";
import { Button, Flex, Typography } from "antd";
import { TextProps } from "antd/lib/typography/Text";
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

const PageHeaderStyles: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  backgroundColor: "var(--page-header-bg)",
  padding: "2rem 0",
};

export const QuestionsPage = () => {
  const { t } = useTranslation();
  const questionsTotalCount = getQuestionsTotalCount();
  const { ref, inView } = useInView({
    threshold: (1 / questionsTotalCount) * 1.25, // Reveal when half of second card is in view
  });
  const questionsStartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("Match bar should be in view: ", inView);
  }, [inView]);

  return (
    <>
      {inView && <CandidatesMatch />}
      <Flex
        component="section"
        vertical
        align="center"
        style={PageHeaderStyles}
      >
        <Text className="subtitle" style={{ margin: 0 }}>
          {t("electionName")}
        </Text>
        <Title level={1} style={{ fontWeight: 900 }}>
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
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingTop: 24,
          alignItems: "center",
        }}
      >
        <QuestionForm />
      </div>
    </>
  );
};
