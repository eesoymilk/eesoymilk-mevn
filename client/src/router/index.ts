import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import BlogDetailsView from "@/views/BlogDetailsView.vue";
import CreateBlogView from "../views/CreateBlogView.vue";
import CourseView from "../views/CourseView.vue";
import AddCourseView from "../views/AddCourseView.vue";
import DcardView from "@/views/DcardView.vue";
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
      path: "/about",
      name: "About",
      component: AboutView,
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
      path: "/dcard",
      name: "Dcard",
      component: DcardView,
    },
    {
      path: "/dcard/users/:username/repos",
      name: "Repos",
      component: ReposView,
    },
    {
      path: "/dcard/users/:username/repos/:repo",
      name: "Repo",
      component: RepoView,
    },
    // {
    //   path: "/dcard/backend",
    //   name: "DcardBackend",
    // },
    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      component: NotFoundView,
    },
  ] as Array<RouteRecordRaw>,
});

export default router;
