import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

import fr from "./locales/fr.json";
import en from "./locales/en.json";

const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get("lang");
const i18n = createI18n({
  legacy: false,
  locale: lang || "fr",
  fallbackLocale: "en",
  messages: { fr, en },
});

import "./assets/main.css";

createApp(App).use(i18n).mount("#app");
