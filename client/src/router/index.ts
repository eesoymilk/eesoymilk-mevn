import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import BlogDetailsView from "../views/BlogDetailsView.vue";
import CreateBlogView from "../views/CreateBlogView.vue";
import CourseView from "../views/CourseView.vue";
import AddCourseView from "../views/AddCourseView.vue";

import Callback from "@/components/Callback.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      component: NotFoundView,
    },
  ],
});

export default router;
