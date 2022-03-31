<template>
  <v-card class="mt-5" style="width: 60vw; max-height: 60vw">
    <v-card-title v-if="props.isNewPost">
      <div>Post Something!!!</div>
    </v-card-title>
    <v-card-title v-else>
      <div>Edit</div>
    </v-card-title>
    <v-card-title>
      <v-text-field label="Title" v-model="editingBlog.title"></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-textarea label="Body" v-model="editingBlog.body"></v-textarea>
    </v-card-text>

    <v-card-actions>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-combobox
              v-model="editingBlog.tags"
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
        <v-icon icon="mdi-undo" />
        <span>Back</span>
      </v-btn>
      <v-btn @click="submitBlog()">
        <v-icon icon="mdi-cloud-upload" />
        <span>Submit</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import type Blog from "@/models/blog";

const props = defineProps({
  isNewPost: {
    require: true,
    type: Boolean,
  },
  prevBlog: {
    required: true,
    type: Object,
  },
});
const emit = defineEmits({
  // Validate submit event
  submit: (blog: Blog) => {
    return true;
  },
});
const editingBlog = reactive<Blog>({
  title: "",
  body: "",
  tags: [],
}) as Blog;
const defaultTags = ["diary", "course", "ee", "programming", "webdev", "vue"];
const submitBlog = () => {
  if (
    !props.isNewPost &&
    editingBlog.title === props.prevBlog.title &&
    editingBlog.body === props.prevBlog.body &&
    editingBlog.tags.length === props.prevBlog.length &&
    props.prevBlog.tags.every(
      (tag: string, idx: number) => tag === editingBlog.tags[idx]
    )
  ) {
    console.log("not edited");
    console.log(editingBlog.tags);
    console.log(props.prevBlog.tags);

    return;
  }

  emit("submit", editingBlog);
};
onMounted(() => {
  editingBlog.title = props.prevBlog.title;
  editingBlog.body = props.prevBlog.body;
  props.prevBlog.tags.forEach((tag: string) => editingBlog.tags.push(tag));
});
</script>
