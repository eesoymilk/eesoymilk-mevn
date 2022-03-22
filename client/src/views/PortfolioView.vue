<template>
  <v-toolbar dark prominent>
    <v-icon icon="mdi-microsoft-visual-studio-code" />

    <v-toolbar-title>Portfolios</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn-toggle v-model="toggle_filter">
      <v-btn v-for="(filter, index) in filters" :key="index">
        <v-icon :icon="filter.icon" /> {{ filter.name }}
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
  <RouterView :filter="filters[toggle_filter].name" />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import { onMounted, ref, type Ref } from "vue";

const filters = [
  {
    name: "all",
    icon: "mdi-tag-multiple",
  },
  {
    name: "web",
    icon: "mdi-vuejs",
  },
  {
    name: "programming",
    icon: "mdi-language-cpp",
  },
  {
    name: "ee",
    icon: "mdi-lightning-bolt",
  },
];
const toggle_filter = ref(0) as Ref<number>;
onMounted(() => {
  console.log("Portfolio Mounted");
});
</script>
