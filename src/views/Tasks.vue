<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const taskId = Number(route.params.id);
const task = computed(() => store.getters.taskById(taskId));
</script>

<template>
  <div>
    <div v-if="task">
      <h1>{{ task.title }}</h1>
      <p>{{ task.description }}</p>
    </div>
    <p v-else>404 Task not found</p>
  </div>
</template>