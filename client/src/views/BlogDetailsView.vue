<template>
  <v-container>
    <v-navigation-drawer permanent position="right">
      nav drawer
    </v-navigation-drawer>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card v-if="blog">
            <v-card-title>{{ blog.title }}</v-card-title>
            <v-card-text>{{ blog.body }}</v-card-text>
            <v-card-text>{{ blog.createdAt }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import type Blog from "@/interfaces/blogInterface";
import BlogService from "@/services/blogService";
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

const blog = ref(null) as Ref<Blog | null>;
const route = useRoute();

onMounted(async () => {
  blog.value = await BlogService.getBlog(route.params.id as string);
});
</script>
