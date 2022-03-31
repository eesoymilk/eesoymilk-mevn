<template>
  <v-container>
    <!-- Title -->
    <div class="text-h3" v-text="projectDetails.title"></div>
    <div class="text-subtitle" v-text="projectDetails.subtitle"></div>
    <v-divider class="my-5"></v-divider>
    <!-- Introduction -->
    <v-row align="center">
      <v-col sm="12" md="6" cols="xs-12 sm-6" align="left">
        <div class="text-h4"><v-icon icon="mdi-flare" />Introduction</div>
        <div class="text-body-1" v-text="projectDetails.introduction"></div>
      </v-col>
      <v-col sm="12" md="6" cols="xs-12 sm-6" align="center" class="pa-10">
        <v-img :src="thumbnail"></v-img>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>

    <div class="text-h4"><v-icon icon="mdi-github" />GitHub</div>
    <a
      href="https://github.com/qiyoudaoyi/8051final"
      class="text-decoration-none text-h6"
      target="_blank"
    >
      qiyoudaoyi/8051final
    </a>
    <v-divider class="my-5"></v-divider>
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
    <v-divider class="my-5"></v-divider>
    <div class="text-h4">
      <v-icon icon="mdi-lightbulb-on" />Discussion and Retrospection
    </div>
    <div class="text-body-1" v-text="projectDetails.discussion"></div>
  </v-container>
</template>

<script setup lang="ts">
import thumbnail from "@/assets/game-of-balance-thumbnail.png";
const projectDetails = {
  title: "Game of Balance",
  subtitle: "A project made in 8052 microprocessor.",
  introduction:
    "This is a recreation of the balance board game using 8052 microprocessor. I utilize the 3-Axis Accelerometer and Gyro Sensor to accomplish this project. On top of that, I also made a password authentication system with the help of Hall sensor. It's a pretty small project but it encompasses a ton of functionalities.",
  iFrameSrc: "https://www.youtube.com/embed/4FihqOqCna8",
  howWeBuiltIt:
    "Let's take a look at the block diagram and the top module of this project.",
  discussion:
    "With an 8052, it’s really hard to avoid encountering memory issue when doing even just a slightly big project. Therefore, being memory efficient is the key. While we don't really need to worry about this nowadays, it’s still an important if you are looking forward to achieving maximum efficiency. Also, I’ve now realized how important finite state machines are. Though they are not so efficient from the machine code’s perspective, they’ve maximized the developer’s experience in a way that debugging is easy and straightforward. Lastly, it’s been a blast taking this course and I am grateful. Thanks for giving us such a wonderful experience. If I had to pick one thing to hate on, it’d be that I think the written exams cover too many materials at the same time. I sometimes felt lost trying to cram in those things. Other than that, I’ve learned and grown a lot in this semester from this course. Thanks again!",
};
</script>
