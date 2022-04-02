<template>
  <div style="min-height: 9vw; margin-top: 5vw">
    <v-row style="width: 100%">
      <v-col cols="5"></v-col>
      <v-col cols="6">
        <v-card class="hidden-sm-and-down">
          <v-card-text>
            <v-row align="center">
              <v-col cols="2" md="6" align="center">
                <v-btn
                  v-for="item in contact"
                  :key="item.site"
                  class="mx-1"
                  :icon="'mdi-' + item.site"
                  :href="item.link"
                  variant="plain"
                  target="_blank"
                ></v-btn>
              </v-col>
              <v-col cols="10" md="6" align="left">
                <div><v-icon icon="mdi-phone" />(+886)912-045-890</div>
                <div><v-icon icon="mdi-email" />qiyoudaoyi@gmail.com</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-chip
          v-for="thing in whatIDos"
          :key="thing.name"
          :color="thing.color"
          size="x-large"
          class="ma-2 hidden-sm-and-down"
          >{{ thing.name }}</v-chip
        >
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
  <div style="position: relative; pointer-events: none">
    <v-row style="width: 100%; position: absolute; top: -8vw; z-index: 1000">
      <v-col align="center">
        <v-img width="50%" :src="profilePic" />
      </v-col>
      <v-col cols="6" style="pointer-events: none"></v-col>
      <v-col cols="1" style="pointer-events: none"></v-col>
    </v-row>
  </div>
  <div style="position: relative" class="mb-5">
    <v-img :src="divider" />
    <v-row style="width: 100%; position: absolute; top: 0px; bottom: 0px">
      <v-col cols="5" align="center"> </v-col>
      <v-col
        cols="6"
        class="align-center justify-center"
        style="margin: 2vw; margin-top: 4vw"
      >
        <div style="margin: auto; flex-basis: 80%">
          <v-chip
            v-for="thing in whatIDos"
            :key="thing.name"
            :color="thing.color"
            class="ma-2 hidden-md-and-up"
            size="large"
            style="display: block; text-align: center; height: 100%"
            >{{ thing.name }}</v-chip
          >
        </div>
        <iframe
          class="hidden-sm-and-down"
          :src="iFrameSrc"
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
  <v-card class="hidden-md-and-up">
    <v-card-text>
      <v-row align="center">
        <v-col cols="4" align="center">
          <v-btn
            v-for="item in contact"
            :key="item.site"
            class="mx-1"
            :icon="'mdi-' + item.site"
            :href="item.link"
            variant="plain"
            target="_blank"
          ></v-btn>
        </v-col>
        <v-col cols="8" align="left">
          <div><v-icon icon="mdi-phone" />(+886)912-045-890</div>
          <div><v-icon icon="mdi-email" />qiyoudaoyi@gmail.com</div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-expansion-panels v-model="panel" variant="accordion" multiple>
    <v-expansion-panel>
      <v-expansion-panel-title class="hidden-md-and-up">
        <v-icon icon="mdi-youtube" size="large" />
        <div class="text-h6 text-md-h4 text-center">Introduction Video</div>
        <v-spacer></v-spacer>
        <div class="text-subtitle" v-if="panel?.includes(0)">Close</div>
        <div class="text-subtitle" v-else>Expand</div>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="hidden-md-and-up">
        <iframe
          :src="iFrameSrc"
          class="hidden-md-and-up"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="display: block; margin: 4vw auto; width: 80vw; height: 45vw"
        ></iframe>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon icon="mdi-book-open-page-variant" size="large" />
        <div class="text-h6 text-md-h4 text-center">Portfolio Preview</div>
        <v-spacer></v-spacer>
        <div class="text-subtitle" v-if="panel?.includes(1)">Close</div>
        <div class="text-subtitle" v-else>Expand</div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row>
          <v-col cols="1" class="hidden-md-and-down"></v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="preview in portfolioPreviews"
            :key="preview.name"
          >
            <PortfolioPreviewSheet v-bind="preview" />
          </v-col>
          <v-col cols="1" class="hidden-md-and-down"></v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon icon="mdi-file-account" size="large" />
        <div class="text-h6 text-md-h4 text-center">My resume</div>
        <v-spacer></v-spacer>
        <div class="text-subtitle" v-if="panel?.includes(2)">Close</div>
        <div class="text-subtitle" v-else>Expand</div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-btn
          style="display: block; margin: 1vw auto"
          size="large"
          icon="mdi-google-drive"
          class="text-body-1 text-md-h6 text-center"
          :href="resumeLink"
          target="_blank"
        ></v-btn>
        <v-img :src="resume" style="width: 50vw; margin: auto" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
import PortfolioPreviewSheet from "@/components/portfolio/PortfolioPreviewSheet.vue";
// import VuePdfEmbed from "vue-pdf-embed";
// import resumeSrc from "@/resumePdfSrc";

import profilePic from "@/assets/lumi/ProfilePic.png";
import divider from "@/assets/lumi/AboutMe3_3.png";
import frame1 from "@/assets/lumi/frame1.png";
import frame2 from "@/assets/lumi/frame2.png";
import frame3 from "@/assets/lumi/frame3.png";
import frame4 from "@/assets/lumi/frame4.png";
import frame5 from "@/assets/lumi/frame5.png";
import frame6 from "@/assets/lumi/frame6.png";

import resume from "@/assets/resume.jpg";
import soymilk from "@/assets/soymilk-blue-square.jpg";
import jsCourse from "@/assets/js-course-square.jpg";
import cyberPunk from "@/assets/cyber-punk-2069-square.jpg";
import flappyBird from "@/assets/flappy-bird-square.jpg";
import gameOfBalance from "@/assets/game-of-balance-square.jpg";
import { ref, type Ref } from "vue";

const panel = ref([0, 1, 2]) as Ref<number[] | undefined>;
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

const whatIDos = [
  {
    name: "learn",
    color: "orange",
  },
  {
    name: "make",
    color: "green",
  },
  {
    name: "innovate",
    color: "blue",
  },
];
const contact = [
  {
    site: "youtube",
    link: "https://www.youtube.com/channel/UConEV8T9VvkiWWDepM-bNow",
  },
  {
    site: "facebook",
    link: "https://www.facebook.com/wilson.chang.tw/",
  },
  {
    site: "github",
    link: "https://github.com/qiyoudaoyi",
  },
];
const iFrameSrc = "https://www.youtube.com/embed/NSi9neHhbDY";
const resumeLink =
  "https://drive.google.com/file/d/1P3qjhBZDrdXtQdGz6A7SP9uFLqbXlzQQ/view?usp=sharing";
</script>
