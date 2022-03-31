<template>
  <v-container>
    <v-row>
      <v-col
        v-for="project in filteredProjects"
        :key="project.name"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card height="100%" :to="{ name: project.name }" color="primary">
          <v-img :src="project.img"></v-img>
          <v-spacer></v-spacer>
          <v-card-title>
            {{ project.title }}
          </v-card-title>
          <v-card-actions>
            <v-chip
              v-for="tag in project.tags"
              :key="tag"
              color="indigo"
              class="ma-2"
            >
              {{ tag }}
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import mevn from "@/assets/ononoki.jpg";
import jsCourse from "@/assets/js-course.jpg";
import cyberPunk from "@/assets/cyber-punk-2069.jpg";
import flappyBird from "@/assets/flappy-bird.png";
import gameOfBalance from "@/assets/game-of-balance.png";
import { computed } from "vue";

const props = defineProps({
  filter: {
    required: true,
    type: String,
  },
});

const projects: {
  name: string;
  img: string;
  title: string;
  snippet: string;
  tags: string[];
}[] = [
  {
    name: "eeSoymilk",
    img: mevn,
    title: "MEVN Stack Website",
    snippet: "",
    tags: ["web"],
  },
  {
    name: "JsCourse",
    img: jsCourse,
    title: "JavaScript Foundamentals",
    snippet: "",
    tags: ["web"],
  },
  {
    name: "CyberPunk2069",
    img: cyberPunk,
    title: "A C++ Game Made with Allegro5",
    snippet: "",
    tags: ["programming"],
  },
  {
    name: "FlappyBird",
    img: flappyBird,
    title: "A Flappy Bird Knockoff",
    snippet: "",
    tags: ["ee"],
  },
  {
    name: "GameOfBalance",
    img: gameOfBalance,
    title: "A 8051 Game Made with C",
    snippet: "",
    tags: ["ee"],
  },
];

const filteredProjects = computed(() =>
  !props.filter || props.filter === "all"
    ? projects
    : projects.filter((project) => project.tags.includes(props.filter))
);
</script>
