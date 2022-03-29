<template>
  <v-navigation-drawer
    v-model="drawer"
    bottom
    temporary
    class="hidden-lg-and-up"
  >
    <v-list>
      <v-list-item :to="{ name: 'Blog' }">Blog</v-list-item>
      <!-- <v-list-item :to="{ name: 'Course' }">Course</v-list-item> -->
      <v-list-item :to="{ name: 'Portfolio' }">Portfolio</v-list-item>
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-list-item color="primary" dark v-bind="props"> Dcard </v-list-item>
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
      <v-list-item><v-spacer></v-spacer></v-list-item>
      <v-list-item><v-spacer></v-spacer></v-list-item>
      <v-list-item style="cursor: pointer">
        <AuthenticationButton />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar>
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click="drawer = true"
    ></v-app-bar-nav-icon>
    <v-toolbar-title @click="goHome()" style="cursor: pointer">
      <span class="font-weight-light">ee</span>
      <span>Soymilk</span>
    </v-toolbar-title>
    <v-spacer class="hidden-md-and-down"></v-spacer>
    <v-btn-toggle class="hidden-md-and-down">
      <v-btn :to="{ name: 'Blog' }">Blog</v-btn>
      <!-- <v-btn :to="{ name: 'Course' }">Course</v-btn> -->
      <v-btn :to="{ name: 'Portfolio' }">Portfolio</v-btn>
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
    </v-btn-toggle>
  </v-app-bar>
</template>

<script lang="ts" setup>
import AuthenticationButton from "./buttons/AuthenticationButton.vue";
import { useRouter } from "vue-router";
import { ref, type Ref } from "vue";

const drawer = ref(false) as Ref<boolean>;
const router = useRouter();
const goHome = () => router.push({ name: "Home" });
</script>
