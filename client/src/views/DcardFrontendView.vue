<template>
  <v-container>
    <h2>Frontend</h2>
    <v-form>
      <v-container>
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
            <v-btn rounded block large ripple @click="searchUser()">
              Go!
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
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
