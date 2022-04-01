<template>
  <v-sheet class="mt-10" style="position: relative" width="33.3vw">
    <v-img :src="props.frameSrc" style="pointer-events: none; z-index: 10" />
    <v-img
      :src="props.imgSrc"
      style="
        width: 100%;
        position: absolute;
        top: 0px;
        bottom: 0px;
        margin: auto;
      "
    />
  </v-sheet>
</template>

<script lang="ts" setup>
const props = defineProps({
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
</script>
