import { Link, Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Flex, Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setActiveTheme(prefersDarkMode);
  }, [prefersDarkMode, setActiveTheme]);

  const footerLinkStyles = { fontWeight: 700, padding: "12px 24px" };

  const bodyLayout: React.CSSProperties = {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
  };

  const headerStyles: React.CSSProperties = {
    display: "flex",
    boxShadow: "var(--black-15) 0 0 7px 0",
    backgroundColor: "var(--toolbar-bg)",
  };

  const contentStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "flex-start",
  };

  return (
    <Layout style={bodyLayout}>
      <Header style={headerStyles}>
        <Toolbar />
      </Header>
      <Content style={contentStyles}>
        <Outlet />
      </Content>
      <Footer>
        <Flex
          justify="center"
          wrap="wrap"
          style={{ padding: "4px 16px", fontSize: "14px" }}
        >
          <Link style={footerLinkStyles} to="/">
            {t("footer.frontPageLink")}
          </Link>
          <a
            style={footerLinkStyles}
            href="https://vaalit.yle.fi/vaalikone/presidentinvaali2024"
            target="_blank"
            rel="noreferrer"
          >
            Ylen vaalikone presidentivaaleissa 2024
          </a>
          {/* TODO: Link to source code */}
        </Flex>
        {/* TODO: Language menu */}
      </Footer>
    </Layout>
  );
}

export default App;
