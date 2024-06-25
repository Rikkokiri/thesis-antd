import { ThemeConfig } from "antd";

/**
 * Theme customization documentation: https://ant.design/docs/react/customize-theme
 */

export const baseTheme: ThemeConfig = {
  token: {
    // Container background color, e.g: default button, input box, etc. Be sure not to confuse this with `colorBgElevated`.
    // colorBgContainer: "#fff",
    borderRadius: 4,
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontSize: 16,
    lineHeight: 1.5,
    fontSizeSM: 12,
    fontWeightStrong: 700,
    lineWidthFocus: 2,
    // Heading styles
    fontSizeHeading1: 28,
    lineHeightHeading1: 1.3,
    fontSizeHeading2: 24,
    lineHeightHeading2: 1.5,
    fontSizeHeading3: 18,
    lineHeightHeading3: 1.2,
    // linkDecoration,
    // The height of the basic controls such as buttons and input boxes in Ant Design
    controlHeightLG: 48,
    // The background color of the mask, used to cover the content below the mask, Modal,
    // Drawer and other components use this token
    // colorBgMask:
  },
  components: {
    Layout: {
      headerHeight: 72,
      headerPadding: "0 24px",
      // TODO: headerBg
      // Footer styles:
      footerPadding: "21px 0",
      // TODO: footerBg
      /* bodyBg: "var(--gray-10)",
      footerBg: "var(--gray-5)",
      headerBg: "#fff", */
    },
    Button: {
      borderRadius: 100,
      borderRadiusLG: 100,
      contentFontSizeLG: 16,
      contentFontSize: 12,
      contentLineHeightLG: 20,
      fontWeight: 700,
      defaultShadow: "none",
      primaryShadow: "none",
      // primaryColor: "#fff", // Text color of primary button
      // Button padding:
      paddingBlockLG: 4, // Vertical padding of button
      paddingInlineLG: 16, // Horizontal padding of button
      paddingBlock: 6, // Vertical padding of small button
      paddingInline: 12, // Horizontal padding of small button
    },
    Card: {
      headerFontSize: 20,
    },
    // TODO: Style tags
    Tag: {},
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
  },
};
