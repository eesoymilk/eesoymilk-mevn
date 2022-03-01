<template>
  <App />
</template>

<script lang="ts" setup>
import App from "./App.vue";
import { provideAuth0 } from "./services/auth0-plugin";
provideAuth0();
</script>
