import { NameStorageKey } from "@/constants/common";
import { useGlobalStore } from "@/stores/global";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import QuestionsView from "@/views/QuestionsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/404",
      name: "404",
      component: NotFoundView,
    },
    {
      path: "/klausimelis/:id",
      name: "questions",
      component: QuestionsView,
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
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
