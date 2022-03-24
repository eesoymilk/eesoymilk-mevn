<template>
  <v-container>
    <!-- Title -->
    <div class="text-h3" v-text="projectDetails.title"></div>
    <div class="text-subtitle" v-text="projectDetails.subtitle"></div>
    <v-divider></v-divider>
    <!-- Introduction -->
    <v-row align="center">
      <v-col sm="12" md="6" cols="xs-12 sm-6" align="left">
        <div class="text-h4"><v-icon icon="mdi-flare" />Introduction</div>
        <div class="text-body-1" v-text="projectDetails.introduction"></div>
      </v-col>
      <v-col sm="12" md="6" cols="xs-12 sm-6" align="center" class="pa-10">
        <v-img :src="flappyBird"></v-img>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="text-h4"><v-icon icon="mdi-github" />GitHub</div>
    <div class="text-subtitle">
      This project is built with Vivado so there are no GitHub repo dedicated
      for this. Instead, I'll link you guys the entire project and report on
      GoogleDrive.
    </div>
    <v-divider></v-divider>
    <div class="text-h4">
      <v-icon size="x-large" icon="mdi-google-drive" />GoogleDrive
    </div>
    <div>
      <a
        href="https://drive.google.com/drive/folders/1YuObjyKp_BxYtd0zmSvT8s_rryoouBfe?usp=sharing"
        class="text-decoration-none text-h5"
        target="_blank"
      >
        Project File:
        https://drive.google.com/drive/folders/1YuObjyKp_BxYtd0zmSvT8s_rryoouBfe?usp=sharing
      </a>
    </div>
    <div>
      <a
        href="https://drive.google.com/file/d/1lmUHHbYUhnOQlY5-pMD33owAjTb2j_Ae/view?usp=sharing"
        class="text-decoration-none text-h5"
        target="_blank"
      >
        Project Report:
        https://drive.google.com/file/d/1lmUHHbYUhnOQlY5-pMD33owAjTb2j_Ae/view?usp=sharing
      </a>
    </div>
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
    <div class="text-h4"><v-icon icon="mdi-cogs" />How We Built it</div>
    <div class="text-body-1" v-text="projectDetails.howWeBuiltIt"></div>
    <v-row justify="center">
      <v-col cols="12" align="center">
        <div class="text-h6" v-text="'Block Diagram'"></div>
      </v-col>
      <v-col xs="12" md="6" align="center">
        <v-img :src="blockDiagram"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" align="center">
        <div class="text-h6" v-text="'Top Module (Verilog HDL)'"></div>
      </v-col>
      <v-col xs="12" md="6" align="center">
        <v-img :src="topModule"></v-img>
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
import flappyBird from "@/assets/flappy-bird.png";
import topModule from "@/assets/flappy-bird-top-module.png";
import blockDiagram from "@/assets/flappy-bird-block-diagram.jpg";
const projectDetails = {
  title: "Flappy Bird",
  subtitle: "A Logic Design Lab Final Project",
  introduction:
    "This is a mimic project of the popular mobile phone game, Flappy Bird. My teammate, Juile Chien(簡佳吟) and I created this game for the final project in our Logic Design Lab Course in freshmen year. We use FPGA along with Verilog to communicate with the screen (via VGA protocols) and keyboard to make the game. In addition, The built-in speaker in the FPGA board is also utilize to play the background music.",
  iFrameSrc: "https://www.youtube.com/embed/PIYVNrukchk",
  howWeBuiltIt:
    "Let's take a look at the block diagram and the top module of this project.",
  discussion:
    "This is challenging project since it requires not only knowledge of HDL which differs quite a lot from normal programming logic, but also tremendous patient. We need to directly program each pixel in the VGA monitor and sometimes there are a thousand ways to accomplish the same goal. However, as we finshed the project and saw the game we built being played on the screen, we felt like everything has paid off.",
};
</script>
