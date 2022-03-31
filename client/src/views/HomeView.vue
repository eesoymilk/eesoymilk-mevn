<template>
  <!-- style="max-width: 100%; position: absolute; top: 0px" -->
  <div style="min-height: 9vw; margin-top: 4.5vw">
    <v-row style="width: 100%">
      <v-col cols="5"></v-col>
      <v-col cols="7">
        <div class="text-h5" v-text="selfIntro.nameIntro"></div>
        <v-btn
          class="ma-2"
          elevation="6"
          tile
          rounded
          outlined
          depressed
          v-for="name in selfIntro.names"
          :key="name"
          v-text="name"
        ></v-btn>
        <div class="text-h4" v-text="selfIntro.header"></div>
      </v-col>
    </v-row>
  </div>
  <div style="position: relative">
    <v-row style="width: 100%; position: absolute; top: -8vw; z-index: 1000">
      <v-col align="center"><v-img width="50%" :src="profilePic" /></v-col>
      <v-col cols="6"></v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
  <div style="position: relative" class="mb-5">
    <v-img :src="divider" />
    <v-row style="width: 100%; position: absolute; top: 0px; bottom: 0px">
      <!-- <v-col align="center"><v-img width="48%" :src="profilePic" /></v-col> -->
      <v-col cols="5" class="mt-10"></v-col>
      <v-col cols="6" class="mt-10 py-6" align="center">
        <div class="text-h5">My Introduction Video</div>
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube.com/embed/MzCb49dcR2E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
  <v-divider></v-divider>
  <div class="text-h4" style="height: max-content">
    <img style="height: 100px" :src="portfolioIcon" />My Works
  </div>
  <div class="mt-10" style="position: relative">
    <v-img :src="frames" style="pointer-events: none; z-index: 10" />
    <v-row
      align="center"
      style="
        width: 100%;
        position: absolute;
        top: 0px;
        bottom: 0px;
        margin: auto;
      "
    >
      <v-col
        align="center"
        cols="2"
        v-for="p in portfoliosPreview"
        :key="p.name"
        style="position: relative; cursor: pointer"
        @click="navigateTo(p.name)"
      >
        <v-img :src="p.img" />
      </v-col>
      <v-col align="center" cols="2">6</v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import AboutMe from "@/assets/lumi/AboutMe3_2.png";
import profilePic from "@/assets/lumi/ProfilePic.png";
import divider from "@/assets/lumi/AboutMe3_3.png";
import frames from "@/assets/lumi/frames.png";
import frame1 from "@/assets/lumi/frame1.png";
import frame2 from "@/assets/lumi/frame2.png";
import frame3 from "@/assets/lumi/frame3.png";
import frame4 from "@/assets/lumi/frame4.png";
import frame5 from "@/assets/lumi/frame5.png";
import frame6 from "@/assets/lumi/frame6.png";
import portfolioIcon from "@/assets/lumi/icon_portfolio.png";
import Frame from "@/assets/lumi/frame1.png";

import soymilk from "@/assets/soymilk-blue-square.jpg";
import jsCourse from "@/assets/js-course-square.jpg";
import cyberPunk from "@/assets/cyber-punk-2069-square.jpg";
import flappyBird from "@/assets/flappy-bird-square.jpg";
import gameOfBalance from "@/assets/game-of-balance-square.jpg";
import { useRouter } from "vue-router";

const portfoliosPreview = [
  {
    img: soymilk,
    name: "eeSoymilk",
    frame: frame1,
  },
  {
    img: jsCourse,
    name: "JsCourse",
    frame: frame1,
  },
  {
    img: cyberPunk,
    name: "CyberPunk2069",
    frame: frame1,
  },
  {
    img: flappyBird,
    name: "FlappyBird",
    frame: frame1,
  },
  {
    img: gameOfBalance,
    name: "GameOfBalance",
    frame: frame1,
  },
];

const selfIntro = {
  nameIntro: "I am...",
  names: ["an EE Student", "YouTuber eeSoymilk", "Wilson", "張育瑋"],
  header: "I LEARN, I MAKE, I INNOVATE...",
};

const router = useRouter();
const navigateTo = (name: string) => {
  router.push({ name });
};
</script>
