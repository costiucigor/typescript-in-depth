<script setup lang="ts">
import {ref, computed, onMounted} from "vue";
import {useRoute} from "vue-router";
import store from "../store";
import router from "../router";

const rules = [value => value.length <= 200 || 'Max 200 characters'];
const description = ref("");
const date = ref("");
const tags = ref<{ [key: number]: { id: number; description: string } }>({});
const newTag = ref('');

const route = useRoute();
const taskId = Number(route.params.id);
const task = computed(() => store.getters.taskById(taskId));

const addTag = () => {
  const trimmedTag = newTag.value.trim();
  if (trimmedTag) {
    const nextKey = Object.keys(tags.value).length + 1;
    tags.value[nextKey] = {id: nextKey, description: trimmedTag};
    newTag.value = "";
  }
};

const tagEntries = computed(() => Object.entries(tags.value));

const submitHandler = () => {
  if (task.value && task.value.id && task.value.description && task.value.date) {
    store.dispatch("updateTask", {
      id: task.value.id,
      description: task.value.description,
      date: task.value.date
    }).then(() => {
      router.push("/list");
    });
  }
};

const truncatedDescription = computed(() => {
  const description = task.value?.description || "";
  return description.length > 50 ? description.slice(0, 50) + "..." : description;
});

onMounted(() => {
  if (task.value) {
    tags.value = task.value.tags;
    description.value = task.value.description;
    date.value = task.value.date;
  }
})
</script>

<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-form @submit.prevent="submitHandler" v-if="task">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" class="text-center">
                <p>{{ task.title }}</p>
                <p>{{ truncatedDescription }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-chip v-for="(tag, key) in tagEntries" :key="key" label outlined class="ma-2" closable required>
                  {{ tag.description }}
                </v-chip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="newTag" label="Add Tag" @keyup.space="addTag"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-textarea
                    :rules="rules"
                    label="Write a description"
                    no-resize
                    rows="10"
                    v-model="description"
                    counter
                    required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                    type="date"
                    v-model="date"
                    class="mt-4"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" class="text-center">
                <v-btn class="btn" type="submit">
                  Update
                </v-btn>
                <v-btn class="btn ml-16 bg-blue" type="submit">
                  Complete task
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-row align="center" justify="center" v-else>
          <v-col cols="12" class="text-center">
            <p>404 Task not found</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
