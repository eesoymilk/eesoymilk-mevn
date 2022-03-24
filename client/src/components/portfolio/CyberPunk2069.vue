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
        <v-img :src="cyberPunk"></v-img>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <div class="text-h4"><v-icon icon="mdi-github" />GitHub</div>
    <a
      href="https://github.com/qiyoudaoyi/I2P2final"
      class="text-decoration-none text-h6"
      target="_blank"
    >
      qiyoudaoyi/I2P2final
    </a>

    <v-divider></v-divider>
    <div class="text-h4"><v-icon icon="mdi-movie-open" />Demo</div>
    <v-row justify="center">
      <v-col xs="12" md="6" align="center">
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
import cyberPunk from "@/assets/cyber-punk-2069.jpg";
const projectDetails = {
  title: "CyberPunk2069",
  subtitle: "A C++ game developed in Allegro5.",
  introduction:
    "First of all, I'd like to give a big shoutout to my teammate 林俊霆 who build this game with me. We had a lot of fun! We named it \"CyberPunk 2069\" because we thought my game would be buggy and it turned out to be true. This is the final project in our I2P2 (Introduction to Programming 2) course. The hardest part of this project is to create various classes for each identity in the game. Atfer all, this is a C++ project. What's worse is that we are not allowed to use any third-party dependencies, only Allegro5. That is, we need to pretty much code everything from scratch.",
  iFrameSrc: "https://www.youtube.com/embed/JN5yp2glteE",
  discussion:
    "If building websites and designing courses are the reasons I got good in JavaScript, this is definitely the reason I become in love with C++. Though writing C++ with Allegro5 is, without a doubt, no fun at all, I enjoy coding C++ else where. I love how C++ is fast, elegant, and useful in pretty much every usecases. I'd love to learn more abouy C++ and build a application out of it someday.",
};
</script>
