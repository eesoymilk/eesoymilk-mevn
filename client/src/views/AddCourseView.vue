<template>
  <v-card class="mt-5">
    <v-card-title>Add A New Course</v-card-title>
    <v-card-actions>
      <v-select
        dense
        :items="['109', '110']"
        label="School Year"
        v-model="schoolYear"
      ></v-select>
      <v-select
        dense
        :items="['Fall', 'Spring', 'Summer']"
        label="Season"
        v-model="season"
      >
      </v-select>
      <v-text-field label="Course Number" v-model="courseNumber"></v-text-field>
      <v-text-field label="Credits" v-model="course.credits"></v-text-field>
      <v-text-field label="Time" v-model="course.time"></v-text-field>
      <v-text-field label="Room" v-model="course.room"></v-text-field>
    </v-card-actions>
    <v-card-actions>
      <v-text-field label="Title" v-model="course.title"></v-text-field>
      <v-text-field
        label="Instructor"
        v-model="course.instructor"
      ></v-text-field>
    </v-card-actions>
    <v-card-actions>
      <!-- <v-slider
        :ticks="gapLevels"
        :max="10"
        step="1"
        show-ticks="always"
        tick-size="11"
      ></v-slider> -->
      <v-text-field label="Rank" v-model="course.rank"></v-text-field>
      <v-text-field label="GPA" v-model="course.gpa"></v-text-field>
      <v-text-field
        label="Total Students"
        v-model="course.totalEnrollment"
      ></v-text-field>
    </v-card-actions>

    <v-card-actions>
      <v-btn :to="{ name: 'Course' }">
        <v-icon>mdi-undo</v-icon>
        <span>Back</span>
      </v-btn>
      <v-btn @click="submitCourse()">
        <v-icon>mdi-cloud-upload</v-icon>
        <span>Submit</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type Course from "@/models/course";
// import type CourseValidation from "@/services/courseService";
import CourseService from "@/services/courseService";
import { reactive, ref, type Ref } from "vue";
import { useRouter } from "vue-router";

const schoolYear = ref("") as Ref<string>;
const season = ref("") as Ref<string>;
const courseNumber = ref("") as Ref<string>;
// const semesters = Object.freeze({ Fall: "10", Spring: "20", Summer: "30" });
// const gapLevels = Object.freeze({
//   0: "E",
//   1: "D",
//   2: "C-",
//   3: "C",
//   4: "C+",
//   5: "B-",
//   6: "B",
//   7: "B+",
//   8: "A-",
//   9: "A",
//   10: "A+",
// });

const course = reactive<Course>({
  // _id: "",
  semester: "",
  courseNumber: "",
  title: "",
  credits: 1,
  time: "",
  room: "",
  instructor: "",
}) as Course;

const router = useRouter();
const submitCourse = async () => {
  console.log("submitting...");
  course.semester = schoolYear.value;
  if (season.value == "Fall") course.semester += "10";
  else if (season.value == "Spring") course.semester += "20";
  else if (season.value == "Summer") course.semester += "30";
  await CourseService.createCourse(course);
  router.push({ name: "Course" });
};
</script>
