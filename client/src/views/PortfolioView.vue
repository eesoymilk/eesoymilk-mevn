<template>
  <v-toolbar dark prominent>
    <v-toolbar-title @click="backToOverview()" style="cursor: pointer">
      <v-icon icon="mdi-microsoft-visual-studio-code" />
      Portfolios
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn-toggle v-model="toggle_filter">
      <v-btn
        v-for="(filter, index) in filters"
        :key="index"
        @click="backToOverview()"
      >
        <v-icon :icon="filter.icon" /> {{ filter.name }}
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
  <RouterView :filter="filters[toggle_filter].name" />
</template>

<script lang="ts" setup>
import { RouterView, useRouter } from "vue-router";
import { ref, type Ref } from "vue";

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

const router = useRouter();
const backToOverview = () => {
  if (router.currentRoute.value.name === "PortfolioOverview") return;
  router.push({ name: "PortfolioOverview" });
};
</script>
