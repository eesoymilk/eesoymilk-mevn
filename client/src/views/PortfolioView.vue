<template>
  <v-toolbar dark prominent>
    <v-toolbar-title @click="backToOverview()" style="cursor: pointer">
      <v-icon icon="mdi-microsoft-visual-studio-code" />
      Portfolios
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn-toggle v-model="toggleFilter" class="hidden-md-and-down">
      <v-btn
        v-for="(filter, index) in filters"
        :key="index"
        @click="backToOverview()"
      >
        <v-icon :icon="filter.icon" /> {{ filter.name }}
      </v-btn>
    </v-btn-toggle>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
      class="hidden-lg-and-up"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      bottom
      temporary
      position="right"
      class="hidden-lg-and-up"
    >
      <v-list>
        <v-list-item
          v-for="(filter, index) in filters"
          :key="index"
          @click="changeFilter(index)"
        >
          <v-icon :icon="filter.icon" /> {{ filter.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
  <RouterView :filter="filter" />
</template>

<script lang="ts" setup>
import { RouterView, useRouter } from "vue-router";
import { computed, ref, watch, type ComputedRef, type Ref } from "vue";

const drawer = ref(false);
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
const toggleFilter = ref(0) as Ref<number>;
const toggleOn = ref(true) as Ref<boolean>;
const filter = computed<string>(() => {
  if (!toggleOn.value) return filter.value;
  return filters[toggleFilter.value].name;
}) as ComputedRef<string>;

watch(
  toggleFilter,
  (newToggle) => (toggleOn.value = newToggle === undefined ? false : true)
);

const router = useRouter();
const changeFilter = (index: number) => {
  toggleFilter.value = index;
  backToOverview();
};
const backToOverview = () => {
  if (router.currentRoute.value.name === "PortfolioOverview") return;
  router.push({ name: "PortfolioOverview" });
};
</script>
