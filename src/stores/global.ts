import { NameStorageKey } from "@/constants/common";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
  const questionId = ref("");
  const user = ref(window.localStorage.getItem(NameStorageKey));

  function setUser(name: string) {
    localStorage.setItem(NameStorageKey, name);
    user.value = name;
  }

  return { questionId, user, setUser };
});
