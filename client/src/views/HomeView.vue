<template>
  <div style="min-height: 9vw; margin-top: 5vw">
    <v-row style="width: 100%">
      <v-col cols="5"></v-col>
      <v-col cols="7"></v-col>
    </v-row>
  </div>
  <div style="position: relative">
    <v-row style="width: 100%; position: absolute; top: -8vw; z-index: 1000">
      <v-col align="center">
        <v-img width="50%" :src="profilePic" />
      </v-col>
      <v-col cols="6"></v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
  <div style="position: relative" class="mb-5">
    <v-img :src="divider" />
    <v-row style="width: 100%; position: absolute; top: 0px; bottom: 0px">
      <v-col cols="5" align="center"> </v-col>
      <v-col cols="6" class="align-center justify-center" style="margin: 2vw">
        <div class="text-subtitle text-lg-h5" v-text="selfIntro"></div>
        <div
          class="hidden-lg-and-up"
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: 100%;
          "
        >
          <div
            class="text-h5"
            style="margin: auto auto; flex-basis: 20%; text-align: center"
          >
            I
          </div>
          <div style="margin: auto; flex-basis: 80%">
            <v-chip
              v-for="thing in whatIDos"
              :key="thing.name"
              :color="thing.color"
              class=""
              style="display: block"
              v-text="thing.name"
            ></v-chip>
          </div>
        </div>
        <iframe
          class="hidden-md-and-down"
          src="https://www.youtube.com/embed/MzCb49dcR2E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="display: block; margin: auto; width: 48vw; height: 27vw"
        ></iframe>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
  <iframe
    class="hidden-lg-and-up"
    src="https://www.youtube.com/embed/MzCb49dcR2E"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="display: block; margin: auto; width: 80vw; height: 45vw"
  ></iframe>
  <v-divider></v-divider>
  <v-row>
    <v-col cols="1" class="hidden-md-and-down"></v-col>
    <v-col
      cols="6"
      md="4"
      lg="2"
      v-for="preview in portfolioPreviews"
      :key="preview.name"
    >
      <PortfolioPreviewSheet v-bind="preview" />
    </v-col>
    <v-col cols="1" class="hidden-md-and-down"></v-col>
  </v-row>
</template>

<script lang="ts" setup>
import PortfolioPreviewSheet from "@/components/portfolio/PortfolioPreviewSheet.vue";

import profilePic from "@/assets/lumi/ProfilePic.png";
import divider from "@/assets/lumi/AboutMe3_3.png";
import frame1 from "@/assets/lumi/frame1.png";
import frame2 from "@/assets/lumi/frame2.png";
import frame3 from "@/assets/lumi/frame3.png";
import frame4 from "@/assets/lumi/frame4.png";
import frame5 from "@/assets/lumi/frame5.png";
import frame6 from "@/assets/lumi/frame6.png";

import soymilk from "@/assets/soymilk-blue-square.jpg";
import jsCourse from "@/assets/js-course-square.jpg";
import cyberPunk from "@/assets/cyber-punk-2069-square.jpg";
import flappyBird from "@/assets/flappy-bird-square.jpg";
import gameOfBalance from "@/assets/game-of-balance-square.jpg";
import { useRouter } from "vue-router";

const portfolioPreviews = [
  {
    imgSrc: soymilk,
    name: "eeSoymilk",
    frameSrc: frame1,
  },
  {
    imgSrc: jsCourse,
    name: "JsCourse",
    frameSrc: frame2,
  },
  {
    imgSrc: cyberPunk,
    name: "CyberPunk2069",
    frameSrc: frame3,
  },
  {
    imgSrc: flappyBird,
    name: "FlappyBird",
    frameSrc: frame4,
  },
  {
    imgSrc: gameOfBalance,
    name: "GameOfBalance",
    frameSrc: frame5,
  },
];

const selfIntro = "I am Wilson,";
const whatIDos = [
  {
    name: "learn",
    color: "amber",
  },
  {
    name: "make",
    color: "light-green",
  },
  {
    name: "innovate",
    color: "primary",
  },
];
</script>
