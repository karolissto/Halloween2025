<template>
  <fieldset v-if="!user">
    <legend>Koks tavo vardas?</legend>

    <input type="text" id="name" name="name" v-model="name" />

    <button type="submit" @click="onSubmit">Pateikti</button>
  </fieldset>
</template>
<script setup lang="ts">
import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
const globalStore = useGlobalStore();

const name = ref("");
const { user } = storeToRefs(globalStore);
const router = useRouter();

function onSubmit() {
  globalStore.setUser(name.value);
  if (globalStore.questionId) {
    router.push({ name: "questions", params: { id: globalStore.questionId } });
  }
}
</script>
