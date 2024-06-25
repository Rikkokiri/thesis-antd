import { ThemeConfig } from "antd";

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#131415", // "var(--blue-black)",
    colorText: "var(--blue-black)",
    colorBgContainer: "#fff",
    colorPrimaryHover: "var(--black-70)",
  },
  components: {
    Layout: {
      bodyBg: "var(--gray-10)",
      footerBg: "var(--gray-5)",
      headerBg: "#fff",
    },
    Button: {
      // Primary button styles
      primaryColor: "#fff", // Text color of primary button
      // Default button styles (used as outline button in this app)
      defaultBg: "transparent",
      defaultBorderColor: "var(--blue-black)",
      defaultColor: "var(--blue-black)", // Text color of default button
      defaultHoverBg: "var(--black-9)",
      defaultHoverBorderColor: "var(--blue-black)",
      defaultHoverColor: "var(--blue-black)",
    },
    Card: {
      boxShadow: "none",
    },
    Tag: {
      defaultBg: "var(--blue-black)", // Default background color
      defaultColor: "var(--gray-5)", // Default text color
    },
    Typography: {
      colorTextHeading: "var(--dark-blue)",
    },
  },
};
