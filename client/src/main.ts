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
import { createVuetify } from "@vuetify/nightly";
import { aliases, mdi } from "@vuetify/nightly/lib/iconsets/mdi";
import * as components from "@vuetify/nightly/components";
import * as directives from "@vuetify/nightly/directives";

// import { Auth0Plugin } from "./auth"

const app = createApp(Shell);
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
});

app.use(router).use(vuetify).mount("#app");
