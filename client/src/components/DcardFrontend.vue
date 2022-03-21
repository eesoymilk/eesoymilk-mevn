<template>
  <v-container>
    <h2>Frontend</h2>
    <v-card>
      <v-card-text>
        <v-text-field v-model="username" label="Github Username" required>
        </v-text-field>
        <v-btn
          :to="{
            name: 'Repos',
            params: { username: username ? username : 'qiyoudaoyi' },
          }"
        >
          Go!
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

const username = ref("") as Ref<string>;
</script>
