<template>
  <v-container>
    <v-card class="mt-5">
      <v-card-title>Creating A New Post</v-card-title>
      <v-card-title>
        <v-text-field label="Title" v-model="blog.title"></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-textarea label="Body" v-model="blog.body"></v-textarea>
      </v-card-text>

      <v-card-actions>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-combobox
                v-model="blog.tags"
                :items="defaultTags"
                label="Tags"
                multiple
                chips
              ></v-combobox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>

      <v-card-actions>
        <v-btn :to="{ name: 'Blog' }">
          <v-icon>mdi-undo</v-icon>
          <span>Back</span>
        </v-btn>
        <v-btn @click="submitBlog()">
          <v-icon>mdi-cloud-upload</v-icon>
          <span>Submit</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import type Blog from "@/models/blog";
import type BlogValidation from "@/services/blogService";
import BlogService from "@/services/blogService";
import { reactive } from "vue";
import { useRouter } from "vue-router";

import type { Auth0Plugin } from "@/models/auth0Plugin";
import { useAuth0 } from "@/services/auth0Plugin";

const blog = reactive<Blog>({
  title: "",
  body: "",
  tags: [],
}) as Blog;

let blogValidation = reactive<BlogValidation>({
  isValid: false,
  titleErrors: null,
  bodyErrors: null,
  tagsErrors: null,
});
const defaultTags = ["diary", "course", "ee", "programming", "webdev", "vue"];

// Auth0 and submittion
const router = useRouter();
const auth0: Auth0Plugin | null = useAuth0();
const getAccessToken = async (): Promise<null | string> => {
  if (!auth0) return null;
  return await auth0.getAccessToken();
};

const submitBlog = async () => {
  const token = await getAccessToken();
  blogValidation = await BlogService.createBlog(token as string, blog);
  // console.table(blogValidation);
  if (blogValidation.isValid) router.push({ name: "Blog" });
};
</script>
