<template>
  <v-app-bar>
    <v-app-bar-title>
      <span class="font-weight-light">ee</span>
      <span>Soymilk</span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="name in navRouteNames" :key="name" :to="{ name }">
      {{ name }}
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
const navRouteNames: Ref<string[]> = ref<string[]>([
  "Home",
  "About",
  "Blog",
  "CreateBlog",
  "Course",
  "AddCourse",
]);
</script>
