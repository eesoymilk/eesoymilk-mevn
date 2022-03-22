<template>
  <v-app-bar>
    <v-toolbar-title @click="goHome()" style="cursor: pointer">
      <span class="font-weight-light">ee</span>
      <span>Soymilk</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{ name: 'Blog' }">Blog</v-btn>
    <v-btn :to="{ name: 'Course' }">Course</v-btn>
    <!-- <v-btn :to="{ name: 'Portfolio' }">Portfolio</v-btn> -->
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Dcard </v-btn>
      </template>
      <v-list>
        <v-list-item :to="{ name: 'DcardFrontend' }">
          <v-list-item-title>Frontend</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'DcardBackend' }">
          <v-list-item-title>Backend</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn>
      <AuthenticationButton />
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import AuthenticationButton from "./buttons/AuthenticationButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => router.push({ name: "Home" });
</script>
