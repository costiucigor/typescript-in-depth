import { createRouter, createWebHistory } from 'vue-router';
import CreateTask from './views/CreateTask.vue';
import List from "./views/List.vue";
import Tasks from "./views/Tasks.vue";

const routes = [
    {
        path: '/create',
        name: "create",
        component: CreateTask,
    },
    {
        path: '/list',
        name: "list",
        component: List,
    },
    {
        path: '/task/:id',
        name: "task",
        component: Tasks,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

