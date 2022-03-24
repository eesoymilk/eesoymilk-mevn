<template>
  <v-container>
    <!-- Title -->
    <div class="text-h3" v-text="projectDetails.title"></div>
    <div class="text-subtitle" v-text="projectDetails.subtitle"></div>
    <v-divider></v-divider>
    <!-- Introduction -->
    <v-row align="center">
      <v-col sm="12" md="6" align="left">
        <div class="text-h4"><v-icon icon="mdi-flare" />Introduction</div>
        <div class="text-body-1" v-text="projectDetails.introduction"></div>
      </v-col>
      <v-col sm="12" md="6" align="center" class="pa-10">
        <v-img :src="jsCourse"></v-img>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <div class="text-h4"><v-icon icon="mdi-github" />GitHub</div>
    <a
      href="https://github.com/qiyoudaoyi/822-web-course"
      class="text-decoration-none text-h6"
      target="_blank"
    >
      qiyoudaoyi/822-web-course
    </a>

    <v-divider></v-divider>
    <div class="text-h4">
      <v-icon icon="mdi-google-classroom" /> Course Info
    </div>
    <v-row justify="center">
      <v-col xs="12" md="6" align="center" class="pa-5">
        <a
          href="https://hackmd.io/v5SruN2BRLWFeHBvfl9RTg"
          class="text-decoration-none text-h5"
          target="_blank"
        >
          Course Handout (Click Me)
        </a>
        <v-img :src="handout"></v-img>
      </v-col>
      <v-col xs="12" md="6" align="center" class="pa-5">
        <div class="text-h5">Course Video</div>
        <v-responsive :aspect-ratio="16 / 9">
          <iframe
            width="100%"
            height="100%"
            :src="projectDetails.iFrameSrc"
            title="YouTube video player"
            frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="text-h4">
      <v-icon icon="mdi-lightbulb-on" />Discussion and Retrospection
    </div>
    <div class="text-body-1" v-text="projectDetails.discussion"></div>
  </v-container>
</template>

<script setup lang="ts">
import jsCourse from "@/assets/js-course.jpg";
import handout from "@/assets/js-course-handout.jpg";
const projectDetails = {
  title: "JavaScript Course for Beginners",
  subtitle: "A JS course I designed and taught for beginners to web-dev",
  introduction:
    'I designed this course because I am a lecturer in a club called "Clode Garage 822" in my school NTHU. This is a club for makers and we love to create things using the power of coding. Also, I am now designing a MEVN stack course also for my club members. It\'s still in progress.',
  iFrameSrc: "https://www.youtube.com/embed/urXHLa1Hn-M",
  discussion:
    "That JavaScript is weird is a commonly known facts among developers, especially when you get to asyc-JavaScript. In the process of designing this course, I believed that I had been fostering my JS skills. Also, I like to teach people; that gives me a sense of joy. Therefore, I gradually love JS more and more, If it weren't for this course and the club 822, I wouldn't be loving web-dev so much.",
};
</script>
