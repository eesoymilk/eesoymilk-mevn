<template>
  <v-container>
    <v-row v-if="repos.length">
      <v-col cols="12" v-for="repo in repos" :key="repo.id">
        <v-card
          class="my-5"
          :to="{
            name: 'Repo',
            params: {
              username: $route.params.username,
              repo: repo.name,
            },
          }"
        >
          <v-card-title>Name: {{ repo.name }}</v-card-title>
          <v-card-text
            >Stargazers Count: {{ repo.stargazers_count }}</v-card-text
          >
          <v-card-text
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            quo cum asperiores debitis, molestiae reprehenderit repudiandae eius
            quis nisi pariatur neque illum velit ullam magnam esse, maiores,
            repellat soluta. Blanditiis!</v-card-text
          >
        </v-card>
      </v-col>
      <v-btn @click="MoreRepos()">More</v-btn>
    </v-row>
    <v-row v-else-if="userNotFound">
      <v-col>
        <v-card>
          <v-card-title>Oops... User Not Found.</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-card>
          <v-card-title>Loading...</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import type Repository from "@/models/repository";
import ReposService from "@/services/repos";
import { onMounted, onUnmounted, ref, type Ref } from "vue";

const repos = ref([]) as Ref<Repository[]>;
const route = useRoute();
const userNotFound = ref(false) as Ref<boolean>;
const page = ref(1) as Ref<number>;
const endOfRepos = ref(false) as Ref<boolean>;
const isLoadingRepos = ref(false) as Ref<boolean>;

const loadRepos = async () => {
  isLoadingRepos.value = true;
  const loadedRepos = await ReposService.getRepos(
    route.params.username as string,
    page.value
  );

  console.log(loadedRepos);

  if (loadedRepos === null) {
    userNotFound.value = true;
    return;
  }

  if (loadedRepos.length === 0) {
    endOfRepos.value = true;
  } else {
    loadedRepos.forEach((repo) => {
      repos.value.push(repo);
    });
    page.value++;
  }
  isLoadingRepos.value = false;
};

const MoreRepos = () => {
  if (endOfRepos.value || userNotFound.value || isLoadingRepos.value) return;
  console.log("Let's get more repos!!!");
  loadRepos();
};

const handleScroll = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    console.log("You are at the bottom of the page");
    MoreRepos();
  }
};

onMounted(() => {
  loadRepos();
  document.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});
</script>
