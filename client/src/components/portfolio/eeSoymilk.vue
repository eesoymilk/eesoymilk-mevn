<template>
  <v-container>
    <!-- Title -->
    <div class="text-h3" v-text="projectDetails.title"></div>
    <div class="text-subtitle" v-text="projectDetails.subtitle"></div>
    <v-divider class="my-5"></v-divider>
    <!-- Introduction -->
    <v-row align="center">
      <v-col sm="12" md="6" align="left">
        <div class="text-h4"><v-icon icon="mdi-flare" />Introduction</div>
        <div class="text-body-1" v-text="projectDetails.introduction"></div>
      </v-col>
      <v-col sm="12" md="6" align="center" class="pa-10">
        <v-img :src="mevn"></v-img>
      </v-col>
    </v-row>

    <v-divider class="my-5"></v-divider>

    <div class="text-h4"><v-icon icon="mdi-github" />GitHub</div>
    <a
      href="https://github.com/qiyoudaoyi/eesoymilk-mevn"
      class="text-decoration-none text-h6"
      target="_blank"
    >
      qiyoudaoyi/eesoymilk-mevn
    </a>

    <v-divider class="my-5"></v-divider>
    <div class="text-h4"><v-icon icon="mdi-chart-tree" />How I Built it</div>
    <div class="text-h5"><v-icon icon="mdi-account-group" />Frontend</div>
    <v-list subheader>
      <v-list-item v-for="tech in projectDetails.frontend" :key="tech.name">
        <v-list-item-avatar>
          <v-icon :icon="tech.icon" :color="tech.color" />
        </v-list-item-avatar>
        <v-list-item-title v-text="tech.name"></v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="text-h5"><v-icon icon="mdi-cloud-tags" />Backend</div>
    <v-list subheader>
      <v-list-item v-for="tech in projectDetails.backend" :key="tech.name">
        <v-list-item-avatar>
          <v-icon :icon="tech.icon" :color="tech.color" />
        </v-list-item-avatar>
        <v-list-item-title v-text="tech.name"></v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider class="my-5"></v-divider>
    <div class="text-h4">
      <v-icon icon="mdi-lightbulb-on" />Discussion and Retrospection
    </div>
    <div class="text-body-1" v-text="projectDetails.discussion"></div>
  </v-container>
</template>

<script setup lang="ts">
import mevn from "@/assets/ononoki.jpg";
const projectDetails = {
  title: "MEVN Fullstack Website",
  subtitle: "A personal portfolio and blog of mine",
  introduction:
    "I built this website because I wanted a place where I can demonstrate who I am and what I do. VUE is great and all, but I would love to switch to using REACT and NEXT for my next web-dev project since I like learning new stuffs. Last but not least, I love TypeScript and this project is, no exception, built with TypeScript!",
  frontend: [
    {
      name: "Vue3 with Vue-router",
      icon: "mdi-vuejs",
      color: "green",
    },
    {
      name: "Vuetify3",
      icon: "mdi-vuetify",
      color: "indigo",
    },
    {
      name: "firebase Hosting",
      icon: "mdi-firebase",
      color: "amber",
    },
    {
      name: "Auth0",
      icon: "mdi-folder-key-network",
      color: "blue-grey",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "mdi-nodejs",
      color: "teal darken-3",
    },
    {
      name: "TypeScript",
      icon: "mdi-language-typescript",
      color: "blue",
    },
    {
      name: "Express",
      icon: "mdi-server",
      color: "grey",
    },
    {
      name: "MongoDB",
      icon: "mdi-database",
      color: "green",
    },
    {
      name: "Mongoose",
      icon: "mdi-database",
      color: "red darken-4",
    },
    {
      name: "MongoDB Atlas",
      icon: "mdi-database",
      color: "light-green",
    },
    {
      name: "Gcloud App Engine",
      icon: "mdi-google-cloud",
      color: "indigo darken-4",
    },
    {
      name: "Gcloud Secret Manager (password for MongoDB Atlas)",
      icon: "mdi-google-cloud",
      color: "indigo darken-4",
    },
  ],
  discussion:
    "The most annoying part of building a website is connecting everything together. For me in the beggining, I had trouble connecting everying techs I'd learnt, calling my own RESTapi, deploying the whole thing to the web. But in the end, the result is satisfying and I am now looking forward to be accepted as an intern in Dcard.",
};
</script>
