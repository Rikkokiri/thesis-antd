import { baseTheme } from "./theme/base";
import { Link, Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useTranslation } from "react-i18next";
import { ConfigProvider, Flex, Layout } from "antd";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";
import { useEffect } from "react";

const { Header, Content, Footer } = Layout;

function App() {
  const { t } = useTranslation();
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();
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
    justifyContent: "center",
    zIndex: 1,
  };

  const contentStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "flex-start",
  };

  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        hashed: false,
        ...baseTheme, // Contains default light theme
      }}
      wave={{ disabled: true }} // Disable wave effect when e.g. clicking a button
      // Class names so those can be customized (beyond theme's capabilities)
      button={{ className: "eb-button" }}
      card={{ className: "eb-card" }}
      tag={{ className: "eb-tag" }}
      typography={{ className: "eb-typography" }}
    >
      <ConfigProvider
        theme={{
          // algorithm: theme.defaultAlgorithm,
          // With the algorithm, dark theme colors will be derived
          // from the default theme colors. While this provides
          // a quick consistent look, it does not allow for fine
          // control of the dark theme colors.
          /* algorithm: prefersDarkMode
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm, */
          ...(prefersDarkMode ? darkTheme : lightTheme),
        }}
      >
        <Layout style={bodyLayout}>
          <Header style={headerStyles}>
            <Toolbar />
          </Header>
          <Content style={contentStyles}>
            <Outlet />
          </Content>
          <Footer style={{ lineHeight: 1.5 }}>
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
      </ConfigProvider>
    </ConfigProvider>
  );
}

export default App;
