import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";

import Dashboard from "@/components/Dashboard.vue";

// create a router with history and routes
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
