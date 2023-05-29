<script setup lang="ts">
import {ref, computed} from "vue";
import { de } from "vuetify/locale";
import store from "../store";
import router from "../router";

const rules = [value => value.length <= 200 || 'Max 200 characters'];
const title = ref("");
const description = ref("");
const date = ref("");
const tags = ref<{ [key: number]: { id: number; description: string } }>({});
const newTag = ref('');

const addTag = () => {
  const trimmedTag = newTag.value.trim();
  if (trimmedTag) {
    const nextKey = Object.keys(tags.value).length + 1;
    tags.value[nextKey] = { id: nextKey, description: trimmedTag };
    newTag.value = "";
  }
};

const tagEntries = computed(() => Object.entries(tags.value));

const submitHandler = () => {
  const task = {
    title: title.value,
    description: description.value,
    id: Date.now(),
    status: "active",
    tags: tagEntries.value,
    date: date.value,
  }

  store.dispatch("createTask", task)
  router.push("/list")
}
</script>

<template>
  <div class="row">
    <div class="col">
      <h1>Create Task</h1>
      <v-form @submit.prevent="submitHandler">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="title" label="Title" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-chip v-for="(tag, key) in tags" :key="tag" label outlined class="ma-2" closable required>
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
          <v-btn class="btn" type="submit">
            Create Task
          </v-btn>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<style scoped>

</style>