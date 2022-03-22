<template>
  <v-container>
    <h2>Frontend</h2>
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="username"
          label="Github Username"
          required
          @keydown.enter="searchUser()"
        >
        </v-text-field>
        <v-btn @click="searchUser()"> Go! </v-btn>
      </v-card-text>
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
</script>
