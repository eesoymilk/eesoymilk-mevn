<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card v-if="blog">
          <v-card-title class="text-h5">{{ blog.title }}</v-card-title>
          <v-card-subtitle>
            {{ utcToTaipeiTime(blog.createdAt as Date) }}
          </v-card-subtitle>
          <!-- <v-card-text class="text-body-1">
            <pre>{{ blog.body }}</pre>
          </v-card-text> -->
          <v-card-text>
            <div
              v-for="paragraph in paragraphs"
              :key="paragraph"
              class="text-body-1"
            >
              <div v-if="paragraph">{{ paragraph }}</div>
              <br v-else />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-chip
              v-for="tag in blog.tags"
              :key="tag"
              color="indigo"
              class="mx-2"
            >
              {{ tag }}
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              icon="mdi-undo"
              @click="$router.push({ name: 'Blog' })"
            ></v-btn>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-file-edit" @click="editing = !editing"></v-btn>
            <v-btn icon="mdi-delete" color="red" @click="deleteBlog()"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay v-model="editing" class="align-center justify-center">
      <BlogForm
        :isNewPost="false"
        :prevBlog="(blog as Blog)"
        @submit="updateBlog"
      />
    </v-overlay>
  </v-container>
</template>

<script lang="ts" setup>
import type Blog from "@/models/blog";
import BlogService from "@/services/blogService";
import BlogForm from "@/components/BlogForm.vue";
import { onMounted, ref, type Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { format, utcToZonedTime } from "date-fns-tz";
import type { Auth0Plugin } from "@/models/auth0Plugin";
import { useAuth0 } from "@/services/auth0Plugin";

const blog = ref(null) as Ref<Blog | null>;
const paragraphs = ref([]) as Ref<string[]>;
const editing = ref(false) as Ref<boolean>;
let accessToken = ref("");
const route = useRoute();
const router = useRouter();

const refreshPage = () => {
  router.go(0);
};

const deleteBlog = async () => {
  const res = await BlogService.deleteBlog(
    accessToken.value,
    route.params.id as string
  );
  if (res !== null) router.push({ name: "Blog" });
};

const updateBlog = async (updatedBlog: Blog) => {
  console.log("updating...");
  console.log(updatedBlog);
  const res = await BlogService.updateBlog(
    accessToken.value,
    route.params.id as string,
    updatedBlog
  );
  if (res !== null) refreshPage();
};

const timeZone = "Asia/Taipei";
const pattern = "yyyy/M/d HH:mm";
const utcToTaipeiTime = (utcDate: Date) =>
  format(utcToZonedTime(utcDate, timeZone), pattern);

const auth0: Auth0Plugin | null = useAuth0();
onMounted(async () => {
  accessToken.value = (await auth0?.getAccessToken()) as string;
  console.log("Token:", accessToken.value);
  blog.value = await BlogService.getBlog(route.params.id as string);
  paragraphs.value = blog.value?.body.split("\n") as string[];
});
</script>
