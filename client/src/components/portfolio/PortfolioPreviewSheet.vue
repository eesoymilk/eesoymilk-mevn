<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-sheet
      class="mt-10"
      style="position: relative; width: 100%"
      v-bind="props"
      :to="{ name: previewProps.name }"
    >
      <v-img
        :src="previewProps.frameSrc"
        style="z-index: 10; width: 100%; height: max-content; margin: auto"
      />
      <v-img
        :src="previewProps.imgSrc"
        style="
          width: 100%;
          position: absolute;
          top: 0px;
          bottom: 0px;
          margin: auto;
        "
      />

      <v-overlay
        :model-value="isHovering"
        contained
        scrim="#036358"
        class="align-center justify-center"
      >
        <v-btn size="x-large" flat :to="{ name: previewProps.name }">
          <div>{{ previewProps.name }}</div>
        </v-btn>
      </v-overlay>
    </v-sheet>
  </v-hover>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const previewProps = defineProps({
  name: {
    require: true,
    type: String,
  },
  frameSrc: {
    require: true,
    type: String,
  },
  imgSrc: {
    require: true,
    type: String,
  },
});
const overlay = ref(false);
</script>
