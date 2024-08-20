<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/hw2">HW2</RouterLink> |
        <RouterLink to="/hw3">HW3</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
