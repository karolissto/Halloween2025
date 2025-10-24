<template>
  <div>Labas {{ user }}!</div>
  <fieldset>
    <legend>{{ question?.question }}</legend>

    <div v-for="(option, index) in question?.options" :key="index">
      <input type="radio" :id="option" name="option" :value="option" v-model="selected" />
      <label :for="option">{{ option }}</label>
    </div>
  </fieldset>
</template>
<script setup lang="ts">
import Questions from "@/constants/questions";
import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";

const { id } = defineProps<{ id: string }>();

const globalStore = useGlobalStore();

const selected = ref(null);

const { user } = storeToRefs(globalStore);

const question = computed(() => Questions[id]);

watch(selected, () => {
  console.log(selected.value);
});
</script>
