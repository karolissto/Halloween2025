<template>
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
import { computed, ref, watch } from "vue";

const { id } = defineProps<{ id: string }>();

const selected = ref(null);

const question = computed(() => Questions[id]);

watch(selected, () => {
  console.log(selected.value);
});
</script>
