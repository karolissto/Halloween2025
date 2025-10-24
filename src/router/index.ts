import { NameStorageKey } from "@/constants/common";
import { useGlobalStore } from "@/stores/global";
import LoginView from "@/views/LoginView.vue";
import QuestionsView from "@/views/QuestionsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id",
      name: "home",
      component: QuestionsView,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to) => {
  if (to.name !== "login" && !localStorage.getItem(NameStorageKey)) {
    const globalStore = useGlobalStore();
    globalStore.questionId = to.params.id as string;
    return { name: "login" };
  }
});

export default router;
