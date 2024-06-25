import { ThemeConfig } from "antd";

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "var(--gray-5)",
    colorText: "var(--gray-5)",
    colorTextBase: "var(--gray-5)",
    // colorBgContainer
    colorBgContainer: "var(--blue-black)",
    colorPrimaryHover: "var(--white-71)",
  },
  components: {
    Layout: {
      bodyBg: "#000",
      footerBg: "var(--gray-90)",
      headerBg: "var(--blue-black)",
    },
    Button: {
      // Primary button styles
      primaryColor: "var(--blue-black)", // Text color of primary button
      // Default button styles (used as outline button in this app)
      defaultBg: "var(--white-17)",
      defaultBorderColor: "var(--gray-5)",
      defaultColor: "var(--gray-5)", // Text color of default button
      defaultHoverBg: "var(--white-17)",
      defaultHoverBorderColor: "var(--gray-5)",
      defaultHoverColor: "var(--gray-5)",
    },
    Tag: {
      defaultBg: "var(--gray-5)", // Default background color
      defaultColor: "var(--blue-black)", // Default text color
    },
    Typography: {
      colorTextHeading: "#fff",
    },
  },
};
