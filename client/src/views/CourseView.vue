<template>
  <div v-for="course in courses" :key="course._id">
    {{ course }}
  </div>
</template>

<script lang="ts" setup>
import type Course from "@/models/course";
import CourseService from "@/services/courseService";
import { onMounted, ref, type Ref } from "vue";

const courses = ref(null) as Ref<Course[] | null>;

onMounted(async () => {
  const allCourses: Course[] | null = await CourseService.getCourses();
  courses.value = allCourses;
  // if (allCourses) {
  //   allCourses.forEach((course) => {
  //     const semester = course._id.slice(0, 5);
  //     console.log(semester);
  //   });
  // }
});
</script>
