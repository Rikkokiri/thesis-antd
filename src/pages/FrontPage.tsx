import { useAnswerStore } from "@stores/answerStore";
import { useTranslation } from "react-i18next";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Route } from "src/routes";
import { PageSectionsColumn } from "@layout/index";
import { Button, Card, Typography } from "antd";

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
      <div
        style={{
          padding: "1.5rem",
          textAlign: "center",
          backgroundColor: "var(--page-header-bg)", // TODO: Fix
          width: "100%",
        }}
      >
        <Title style={{ marginBottom: "1rem" }} className="heading-1">
          {t("frontPage.title")}
        </Title>
        <Button
          type="primary"
          size="large"
          icon={<FiChevronRight />}
          iconPosition="end"
          onClick={startCompass}
        >
          {t("frontPage.start")}
        </Button>
      </div>
      <PageSectionsColumn
        style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
      >
        <Card title={t("candidates")}>
          <div></div>
        </Card>
      </PageSectionsColumn>
    </>
  );
};
