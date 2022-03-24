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

    <div class="text-h4"><v-icon size="x-large" icon="mdi-github" />GitHub</div>
    <a
      href="https://github.com/qiyoudaoyi/I2P2final"
      class="text-decoration-none text-h6"
      target="_blank"
    >
      qiyoudaoyi/I2P2final
    </a>

    <v-divider></v-divider>
    <div class="text-h4">Demo</div>
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
    <div class="text-h4">Discussion and Retrospection</div>
    <div class="text-body-1" v-text="projectDetails.discussion"></div>
  </v-container>
</template>

<script setup lang="ts">
import cyberPunk from "@/assets/cyber-punk-2069.jpg";
const projectDetails = {
  title: "CyberPunk2069",
  subtitle: "A C++ game developed in Allegro5.",
  introduction:
    "I built this website because I wanted a place where I can demonstrate who I am and what I do. VUE is great and all, but I would love to switch to using REACT and NEXT for my next web-dev project since I like learning new stuffs.",
  iFrameSrc: "https://www.youtube.com/embed/urXHLa1Hn-M",
  discussion:
    "The most annoying part of building a website is connecting everything together. For me in the beggining, I had trouble connecting everying techs I'd learnt, calling my own RESTapi, deploying the whole thing to the web. But in the end, the result is satisfying and I am now looking forward to be accepted as an intern in Dcard.",
};
</script>
