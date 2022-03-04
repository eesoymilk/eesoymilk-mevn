<template>
  <v-app>
    <NavBar />
    <v-main>
      <RouterView />
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import type { Auth0Plugin } from "./models/auth0Plugin";
import { useAuth0 } from "./services/auth0Plugin";

const auth0: Auth0Plugin | null = useAuth0();
onMounted(async () => {
  if (!auth0) return;
  await auth0.createClient();
  await auth0.handleCallback();
});
</script>
