import { Button } from "@components/Button/Button";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { useAnswerStore } from "@stores/answerStore";
import { useTranslation } from "react-i18next";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Route } from "src/routes";
import { PageSectionsColumn } from "@layout/index";
import { Typography } from "antd";

const { Title } = Typography;

export const FrontPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { removeAllAnswers } = useAnswerStore();

  const startCompass = () => {
    removeAllAnswers();
    navigate(Route.QUESTIONS);
  };

  return (
    <>
      <div className="page-header">
        <Title style={{ marginBottom: "1rem" }} className="heading-1">
          {t("frontPage.title")}
        </Title>
        <Button iconAfter={<FiChevronRight />} onClick={startCompass}>
          {t("frontPage.start")}
        </Button>
      </div>
      <PageSectionsColumn
        style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
      >
        <SectionCard title={t("candidates")}>
          <div></div>
        </SectionCard>
      </PageSectionsColumn>
    </>
  );
};
