<script setup lang="ts">
 import {computed} from "vue";
 import store from "../store";

const tasks = computed(() => store.getters.tasks)
</script>

<template>
  <div>
    <h1>List</h1>
    <hr>
    <v-table v-if="tasks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Date</th>
        <th>Description</th>
        <th>Status</th>
        <th>Open</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task, idx) of tasks" :key="task.id">
        <td>{{idx + 1}}</td>
        <td>{{ task.title}}</td>
        <td>{{ task.date }}</td>
        <td class="td"><div class="text">{{ task.description }}</div></td>
        <td>{{ task.status }}</td>
        <td>
          <v-btn small color="green">
            <router-link tag="button" class="btn btn-small white-text" :to="'/task/' + task.id">
              Open
            </router-link>
          </v-btn>
        </td>
      </tr>
      </tbody>
    </v-table>
    <p v-else>No tasks :(</p>
  </div>
</template>

<style scoped>
.td {
  max-width: 400px;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.white-text {
  color: white;
}

</style>