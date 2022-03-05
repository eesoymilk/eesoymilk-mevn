<template>
  <div v-for="course in courses" :key="course._id">
    {{ course }}
  </div>
</template>

<script lang="ts" setup>
import type Course from "@/models/course";
import CourseService from "@/services/courseService";
import { onMounted, ref, type Ref } from "vue";
import { useAuth0 } from "@/services/auth0Plugin";

const auth0 = useAuth0();

const courses = ref(null) as Ref<Course[] | null>;

onMounted(async () => {
  const accessToken = await auth0?.getAccessToken();
  console.log("Token:", accessToken);
  const allCourses: Course[] | null = await CourseService.getCourses(
    accessToken as string
  );
  courses.value = allCourses;
  // if (allCourses) {
  //   allCourses.forEach((course) => {
  //     const semester = course._id.slice(0, 5);
  //     console.log(semester);
  //   });
  // }
});
</script>
