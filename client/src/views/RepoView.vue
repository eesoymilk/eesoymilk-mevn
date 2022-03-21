<template>
  <v-container>
    <v-card v-if="repo" :href="repo.html_url" target="_blank">
      <v-card-title>{{ repo.full_name }}</v-card-title>
      <v-card-text>{{ repo.description }}</v-card-text>
      <v-card-text>Stargazers Count: {{ repo.stargazers_count }}</v-card-text>
    </v-card>
    <v-card v-else-if="notFound">
      <v-card-title>Oops... Repo Not Found</v-card-title>
    </v-card>
    <v-card v-else>
      <v-card-title>Loading...</v-card-title>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import type Repository from "@/models/repository";
import ReposService from "@/services/repos";
import { onMounted, ref, type Ref } from "vue";

const route = useRoute();
const params = route.params;
const repo = ref(null) as Ref<Repository | null>;
const notFound = ref(false) as Ref<boolean>;

onMounted(async () => {
  repo.value = await ReposService.getRepo(
    params.username as string,
    params.repo as string
  );
  if (repo.value === null) notFound.value = true;
});
</script>
