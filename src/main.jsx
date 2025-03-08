import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LangeEng from "./language/en/global.json";
import LangeUz from "./language/uz/global.json";
import LangeRu from "./language/ru/global.json";
import { BrowserRouter } from "react-router-dom";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: LangeEng,
    },
    uz: {
      translation: LangeUz,
    },
    ru: {
      translation: LangeRu,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
