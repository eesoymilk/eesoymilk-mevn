<template>
  <span v-if="!isAuthenticated" @click="login()">Log In</span>
  <span v-else @click="logout()">Log Out</span>
</template>

<script lang="ts" setup>
import { useAuth0 } from "@/services/auth0Plugin";
import { computed, type ComputedRef } from "vue";

const auth0 = useAuth0();
const isAuthenticated: ComputedRef<boolean | null> = computed(
  (): boolean | null => (auth0 ? auth0.isAuthenticated.value : null)
);

const login = (): void => {
  if (auth0) auth0.login();
};
const logout = (): void => {
  if (auth0) auth0.logout({ returnTo: window.location.origin });
};
</script>
