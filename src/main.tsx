import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./i18n/config";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>,
);
