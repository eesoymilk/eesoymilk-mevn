<template>
  <span @click="signup"> Sign Up </span>
</template>

<script lang="ts" setup>
import { useAuth0 } from "@/services/auth0-plugin";

const auth0 = useAuth0();
const signup = (): void => {
  if (auth0) auth0.login({ screen_hint: "signup" });
};
</script>
