<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

components: {
  NavBar
}
</script>

<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
}

li, a {
  text-decoration: none;
}
</style>