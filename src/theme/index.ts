import { ThemeConfig } from "antd";

/**
 * Theme customization documentation: https://ant.design/docs/react/customize-theme
 */

const theme: ThemeConfig = {
  token: {
    borderRadius: 4,
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  components: {
    Layout: {
      headerHeight: 72,
      headerPadding: "0 24px",
      // TODO: headerBg
      // Footer styles:
      footerPadding: "21px 0",
      // TODO: footerBg
    },
    Card: {
      headerFontSize: 20,
    },
    // TODO: Style tags
    Tag: {},
  },
};

export default theme;
