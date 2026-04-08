import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.js";
import "./index.module.scss";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root");
}
createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
