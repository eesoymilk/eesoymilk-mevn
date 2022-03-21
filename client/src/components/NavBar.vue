<template>
  <v-app-bar>
    <v-toolbar-title>
      <span class="font-weight-light">ee</span>
      <span>Soymilk</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="name in navRouteNames" :key="name" :to="{ name }">
      {{ name }}
    </v-btn>
    <v-btn>
      <AuthenticationButton />
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import AuthenticationButton from "./buttons/AuthenticationButton.vue";

const navRouteNames: Ref<string[]> = ref<string[]>([
  "Home",
  "About",
  "Blog",
  "CreateBlog",
  "Course",
  "AddCourse",
  "Dcard",
]);
</script>
