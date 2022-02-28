<template>
  <div v-for="course in courses" :key="course._id">
    {{ course }}
  </div>
</template>

<script lang="ts" setup>
import type Course from "@/interfaces/courseInterface";
import CourseService from "@/services/courseService";
import { onMounted, ref, type Ref } from "vue";

const courses = ref(null) as Ref<Course[] | null>;

onMounted(async () => {
  courses.value = await CourseService.getCourses();
});
</script>
