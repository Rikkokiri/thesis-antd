import React from "react";
import ReactDOM from "react-dom/client";
import { App, ConfigProvider, theme } from "antd";
import customTheme from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./i18n/config";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        cssVar: true,
        hashed: false,
        ...customTheme,
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  </React.StrictMode>,
);
