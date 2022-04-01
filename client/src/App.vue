<template>
  <v-app absolute style="min-height: 100vh">
    <NavBar />
    <v-main>
      <!-- <v-card v-if="user" color="light-green" class="ma-5">
        <v-card-title> Logged in as {{ user.nickname }} </v-card-title>
      </v-card> -->
      <suspense>
        <RouterView />
        <template #fallback>
          <Loading />
        </template>
      </suspense>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Loading from "./components/Loading.vue";
import type { Auth0Plugin } from "./models/auth0Plugin";
import { useAuth0 } from "./services/auth0Plugin";

const auth0: Auth0Plugin | null = useAuth0();
const user = auth0?.user;
onMounted(async () => {
  if (!auth0) return;
  await auth0.createClient();
  await auth0.handleCallback();
  console.log(user?.value);
  window.document.title = "eeSoymilk";
});
</script>
