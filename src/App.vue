<template>
  <div v-if="user">Labas {{ user }}!</div>
  <RouterView />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "./stores/global";

const globalStore = useGlobalStore();
const { user } = storeToRefs(globalStore);
</script>

<style scoped></style>
