<template>
  <!-- <v-navigation-drawer permanent position="right"> </v-navigation-drawer> -->
  <v-toolbar dark prominent>
    <v-toolbar-title @click="backToBlog()" style="cursor: pointer">
      <v-icon icon="mdi-post" />
      Blog
    </v-toolbar-title>
    <v-chip-group
      v-model="selectedTags"
      column
      multiple
      class="hidden-md-and-down"
    >
      <v-chip filter outlined v-for="tag in allTags" :key="tag">
        {{ tag }}
      </v-chip>
    </v-chip-group>

    <v-btn @click="posting = !posting">
      <v-icon icon="mdi-file-plus" />
      <span class="hidden-md-and-down">new post</span>
    </v-btn>
  </v-toolbar>
  <v-card class="hidden-lg-and-up">
    <v-card-text>
      <v-chip-group v-model="selectedTags" column multiple>
        <v-chip filter outlined v-for="tag in allTags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
  <v-container>
    <v-row>
      <v-col
        v-for="blog in filteredBlogs"
        :key="String(blog._id)"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          height="100%"
          :to="{ name: 'BlogDetails', params: { id: String(blog._id) } }"
        >
          <v-card-title>{{ blog.title }}</v-card-title>
          <v-card-subtitle v-if="blog.createdAt">
            {{ utcToTaipeiTime(blog.createdAt) }}
          </v-card-subtitle>
          <v-card-actions>
            <v-chip
              v-for="tag in blog.tags"
              :key="tag"
              color="indigo"
              class="ma-2"
            >
              {{ tag }}
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay v-model="posting" class="align-center justify-center">
      <BlogForm
        :isNewPost="true"
        :prevBlog="(postingBlog as Blog)"
        @submit="submitBlog"
      />
    </v-overlay>
  </v-container>
</template>

<script lang="ts" setup>
import BlogForm from "@/components/BlogForm.vue";
import type Blog from "@/models/blog";
import BlogService from "@/services/blogService";
import {
  computed,
  reactive,
  ref,
  watch,
  type ComputedRef,
  type Ref,
} from "vue";
import { format, utcToZonedTime } from "date-fns-tz";
import { useRouter } from "vue-router";
import type { Auth0Plugin } from "@/models/auth0Plugin";
import { useAuth0 } from "@/services/auth0Plugin";

const blogs = ref(await BlogService.getBlogs()) as Ref<Blog[] | null>;
const posting = ref(false);
const selectedTags = ref([]) as Ref<number[]>;
const allTags = ["diary", "ee", "programming", "course", "webdev"];

const filteredBlogs = computed(() =>
  blogs.value?.filter((blog) =>
    selectedTags.value.every((idx) => blog.tags.includes(allTags[idx]))
  )
) as ComputedRef<Blog[]>;

const router = useRouter();
const backToBlog = () => {
  if (router.currentRoute.value.name === "Blog") return;
  router.push({ name: "Blog" });
};

const postingBlog = reactive<Blog>({
  title: "",
  body: "",
  tags: [],
}) as Blog;

const auth0: Auth0Plugin | null = useAuth0();
const getAccessToken = async (): Promise<null | string> => {
  if (!auth0) return null;
  return await auth0.getAccessToken();
};
const submitBlog = async (newBlog: Blog) => {
  const token = await getAccessToken();
  const blogValidation = await BlogService.createBlog(token as string, newBlog);
  console.log(blogValidation);

  if (blogValidation.isValid) router.go(0);
};

const timeZone = "Asia/Taipei";
const pattern = "yyyy/M/d HH:mm";
const utcToTaipeiTime = (utcDate: Date) =>
  format(utcToZonedTime(utcDate, timeZone), pattern);
</script>
