<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <RouterLink to="/" class="brand-logo">Tasks</RouterLink>
      <ul id="nav-mobile" class="nav">
        <li>
          <RouterLink to="/create" exact activeClass="active" class="nav-link">
            Create
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/list" exact activeClass="active" class="nav-link">
            List
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: cornflowerblue;
  color: #fafafa;
  font-family: "Franklin Gothic Book";
  height: 60px;
  display: flex;
  align-items: center;
}

.nav-wrapper {
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fafafa;
}

.nav-link {
  margin-left: 1rem;
  text-decoration: none;
  color: #fafafa;
}

.nav-link.active {
  font-weight: bold;
}
</style>
