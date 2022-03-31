<template>
  <v-container v-if="repos.length">
    <v-card>
      <v-card-title>
        <v-row align="center">
          <v-col cols="3" align="center">
            <v-avatar class="profile" color="grey" size="100" tile>
              <v-img
                :src="repos[0].owner.avatar_url"
                :alt="String($route.params.username)"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="9" align="center">
            <div class="text-h4">
              {{ $route.params.username }}'s Repositories
            </div>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
    <v-row>
      <!-- <v-col cols="12" v-for="repo in repos" :key="repo.id">
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
          <v-card-title>
            <v-row align="center">
              <v-col cols="8" align="left">
                {{ repo.name }}
              </v-col>
              <v-col cols="4" align="right">
                <v-icon icon="mdi-star" />{{ repo.stargazers_count }}
              </v-col>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col> -->
      <v-col align="center">
        <v-table density="comfortable">
          <tbody>
            <tr v-for="repo in repos" :key="repo.id" @click="toRepo(repo.name)">
              <td class="text-body-1">
                {{ repo.name }}
              </td>
              <td class="text-right">
                <v-icon icon="mdi-star" />
                <span>{{ repo.stargazers_count }}</span>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else-if="userNotFound">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Oops... User Not Found.</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Loading...</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import type Repository from "@/models/repository";
import ReposService from "@/services/repos";
import { onMounted, onUnmounted, ref, type Ref } from "vue";

const repos = ref([]) as Ref<Repository[]>;
const route = useRoute();
const router = useRouter();
const userNotFound = ref(false) as Ref<boolean>;
const page = ref(1) as Ref<number>;
const endOfRepos = ref(false) as Ref<boolean>;
const isLoadingRepos = ref(false) as Ref<boolean>;

const toRepo = (repo: string) => {
  router.push({
    name: "Repo",
    params: { username: route.params.username, repo },
  });
};

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

const isAtBottom = () =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight;

const handleScroll = () => {
  if (isAtBottom()) {
    console.log("You are at the bottom of the page");
    MoreRepos();
  }
};

onMounted(async () => {
  while (isAtBottom()) await loadRepos();
  document.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});
</script>
