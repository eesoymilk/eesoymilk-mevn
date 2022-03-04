<template>
  <v-container>
    <v-navigation-drawer permanent position="right">
      {{ foo }}
    </v-navigation-drawer>
    <v-container>
      <v-row>
        <v-col v-for="blog in blogs" :key="String(blog._id)" cols="4">
          <v-card
            height="100%"
            :to="{ name: 'BlogDetails', params: { id: String(blog._id) } }"
          >
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
import type Blog from "@/models/blog";
import BlogService from "@/services/blogService";
import { ref, type Ref } from "vue";

const getDummyData = async () => {
  await sleep(3000);
  return "hello";
};

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const foo = await getDummyData();

const blogs = ref(await BlogService.getBlogs()) as Ref<Blog[] | null>;
</script>
