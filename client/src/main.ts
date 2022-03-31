import { createApp } from "vue";
import Shell from "./Shell.vue";
import router from "./router";

// vuetify official
// import "vuetify/styles";
// import "@mdi/font/css/materialdesignicons.css";
// import { createVuetify } from "vuetify";
// import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// vuetify nightly
import "@vuetify/nightly/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, type ThemeDefinition } from "@vuetify/nightly";
import { aliases, mdi } from "@vuetify/nightly/lib/iconsets/mdi";
import * as components from "@vuetify/nightly/components";
import * as directives from "@vuetify/nightly/directives";

// import { Auth0Plugin } from "./auth"

const app = createApp(Shell);

const eeSoymilkTheme: ThemeDefinition = {
  dark: false,
  colors: {
    surface: "#f5f5f5",
    // surface: "#f5f5f5",
    // primary: "#90dde3",
    // secondary: "#091015",
    // background: "#f5f5f5",
    primary: "#90dde3",
    secondary: "#90dde3",
    accent: "#90dde3",
    error: "#90dde3",
    info: "#90dde3",
    success: "#90dde3",
    warning: "#90dde3",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    // defaultTheme: "dark",
    defaultTheme: "eeSoymilkTheme",
    themes: { eeSoymilkTheme },
  },
});

app.use(router).use(vuetify).mount("#app");
