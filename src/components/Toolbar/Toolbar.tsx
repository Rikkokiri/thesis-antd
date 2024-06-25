import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Route } from "src/routes";
import { Flex } from "antd";

export const Toolbar = () => {
  const { t } = useTranslation();

  // TODO: Make sure links don't have underline on hover either

  const toolbarNavStyles: React.CSSProperties = {
    maxWidth: "var(--toolbar-max-width)",
    width: "100%",
    fontWeight: 700,
  };

  const toolbarLogo: React.CSSProperties = {
    height: "40px",
    width: "40px",
    background: "var(--yle-logo)",
    borderRadius: "2px",
  };

  return (
    <Flex component="nav" style={toolbarNavStyles}>
      <Flex align="center" gap="24px">
        <div style={toolbarLogo}></div>
        <Link to={Route.ROOT}>{t("navigation.frontPage")}</Link>
      </Flex>
    </Flex>
  );
};
