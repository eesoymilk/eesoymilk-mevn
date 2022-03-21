<template>
  <v-tabs
    v-model="tab"
    fixed-tabs
    background-color="indigo-darken-2"
    theme="dark"
  >
    <v-tab value="frontend"> Frontend </v-tab>
    <v-tab value="backend"> Backend </v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="frontend">
      <DcardFrontend />
    </v-window-item>
    <v-window-item value="backend">
      <DcardBackend />
    </v-window-item>
  </v-window>
</template>

<script lang="ts" setup>
import DcardFrontend from "@/components/DcardFrontend.vue";
import DcardBackend from "@/components/DcardBackend.vue";
import { ref, type Ref } from "vue";
const tab = ref(null) as Ref<string | null>;
</script>
