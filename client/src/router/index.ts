import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import BlogDetailsView from "@/views/BlogDetailsView.vue";
import CreateBlogView from "../views/CreateBlogView.vue";
import CourseView from "../views/CourseView.vue";
import AddCourseView from "../views/AddCourseView.vue";

import PortfolioView from "@/views/PortfolioView.vue";
import PortfolioOverview from "@/components/portfolio/PortfolioOverview.vue";
import eeSoymilk from "@/components/portfolio/eeSoymilk.vue";
import JsCourse from "@/components/portfolio/JsCourse.vue";
import CyberPunk2069 from "@/components/portfolio/CyberPunk2069.vue";
import GameOfBalance from "@/components/portfolio/GameOfBalance.vue";
import FlappyBird from "@/components/portfolio/FlappyBird.vue";

import DcardFrontendView from "@/views/DcardFrontendView.vue";
import DcardBackendView from "@/views/DcardBackendView.vue";
import ReposView from "@/views/ReposView.vue";
import RepoView from "@/views/RepoView.vue";

import NotFoundView from "@/views/NotFoundView.vue";
import { authenticationGuard } from "@/services/authenticationGuard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogView,
    },
    {
      path: "/blog/:id",
      name: "BlogDetails",
      component: BlogDetailsView,
    },
    {
      path: "/blog/create",
      name: "CreateBlog",
      component: CreateBlogView,
      beforeEnter: authenticationGuard,
    },
    {
      path: "/course",
      name: "Course",
      component: CourseView,
    },
    {
      path: "/course/add",
      name: "AddCourse",
      component: AddCourseView,
      beforeEnter: authenticationGuard,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: PortfolioView,
      redirect: () => "/portfolio/overview",
      children: [
        {
          path: "overview",
          name: "PortfolioOverview",
          component: PortfolioOverview,
          props: true,
        },
        {
          path: "ee-soymilk",
          name: "eeSoymilk",
          component: eeSoymilk,
        },
        {
          path: "jscourse",
          name: "JsCourse",
          component: JsCourse,
        },
        {
          path: "cyber-punk-2069",
          name: "CyberPunk2069",
          component: CyberPunk2069,
        },
        {
          path: "game-of-balance",
          name: "GameOfBalance",
          component: GameOfBalance,
        },
        {
          path: "flappy-bird",
          name: "FlappyBird",
          component: FlappyBird,
        },
      ],
    },
    {
      path: "/dcard",
      redirect: () => "/dcard/frontend",
    },
    {
      path: "/dcard/frontend",
      name: "DcardFrontend",
      component: DcardFrontendView,
    },
    {
      path: "/dcard/frontend/users/:username/repos",
      name: "Repos",
      component: ReposView,
    },
    {
      path: "/dcard/frontend/users/:username/repos/:repo",
      name: "Repo",
      component: RepoView,
    },
    {
      path: "/dcard/backend",
      name: "DcardBackend",
      component: DcardBackendView,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      component: NotFoundView,
    },
  ] as Array<RouteRecordRaw>,
});

export default router;
