<template>
  <v-container>
    <div class="text-h3 mt-5">2022 Dcard Frontend Intern Homework</div>
    <v-divider></v-divider>
    <div class="text-h4"><v-icon icon="mdi-movie-open" />Demo</div>
    <div class="text-body-1" v-text="details.intro"></div>
    <v-form>
      <v-row>
        <v-col cols="10">
          <v-text-field
            clearable
            v-model="username"
            label="Enter A GitHub Username"
            required
            @keydown.enter="searchUser()"
          >
          </v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn rounded block large ripple @click="searchUser()"> Go! </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-divider class="my-5"></v-divider>
    <div class="text-h4"><v-icon icon="mdi-github" />GitHub</div>
    <a
      href="https://github.com/qiyoudaoyi/eesoymilk-mevn"
      class="text-decoration-none text-h6"
      target="_blank"
    >
      qiyoudaoyi/eesoymilk-mevn
    </a>
    <div class="text-body-1" v-text="details.github"></div>
    <v-table>
      <thead>
        <th>functionality</th>
        <th>source code</th>
      </thead>
      <tbody>
        <tr>
          <td>Frontend Webpage</td>
          <td>
            <a
              href="https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/views/DcardFrontendView.vue"
              class="text-decoration-none"
              target="_blank"
            >
              /client/src/views/DcardFrontendView.vue
            </a>
          </td>
        </tr>
        <tr>
          <td>Repo Service (Calling APIs)</td>
          <td>
            <a
              href="https://github.com/qiyoudaoyi/eesoymilk-mevn/blob/main/client/src/services/repos.ts"
              class="text-decoration-none"
              target="_blank"
            >
              /client/src/services/repo.ts
            </a>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-divider class="my-10"></v-divider>
    <div class="text-h4"><v-icon icon="mdi-folder-check" />基本要求</div>
    <v-card
      elevation="6"
      rounded
      class="my-5"
      v-for="requirement in requirements"
      :key="requirement.title"
    >
      <v-card-title
        ><v-icon icon="mdi-checkbook" />{{ requirement.title }}</v-card-title
      >
      <v-card-text>
        <div v-for="todo in requirement.todos" :key="todo">
          <v-icon icon="mdi-checkbox-marked" />
          <span v-text="todo"></span>
        </div>
      </v-card-text>
    </v-card>
    <v-card elevation="6" rounded class="my-5">
      <v-card-title>
        <v-icon icon="mdi-checkbox-marked" />
        <a
          href="https://github.com/qiyoudaoyi/eesoymilk-mevn#dcard-homework"
          class="text-decoration-none"
          target="_blank"
        >
          請在文件內說明如何啟動與作業架構的設計 => README.md
        </a>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("") as Ref<string>;
const searchUser = () => {
  if (!username.value) return;
  router.push({
    name: "Repos",
    params: { username: username.value },
  });
};
const details = {
  intro:
    'You can simply type in the user whose repositoies you want to check, then hit "Enter" or the button "GO!".',
  github:
    "Since the GitHub repo I link is this very entire website, I'll link the ecah functinality used in the homework respectively.",
};
const requirements = [
  {
    title: "實作 repository 列表",
    todos: [
      "route 必須要是 /users/{username}/repos",
      "串接 GET /users/{username}/repos 回傳的資料",
      "第一次只能載入 10 個 repository",
      "列表在滾到頁面底部時要再自動發送 API 請求,載入額外 10 個 repository,直到沒有更多 repository",
      "上方需有 Header 顯示 username",
      "下方列表內的項目至少需顯示:repository.name、repository.stargazers_count",
      "每個 repository 可以被點擊,並切換 route 至單一 repository 頁面",
    ],
  },
  {
    title: "實作單一 repository 頁面",
    todos: [
      "route 必須要是 /users/{username}/repos/{repo}",
      "串接 GET /repos/{owner}/{repo} 回傳的資料",
      "頁面至少需顯示:repository.full_name、repository.description、repository.stargazers_count",
      "有超連結可開新分頁至該 repository 在 GitHub 上的頁面",
    ],
  },
];
</script>
