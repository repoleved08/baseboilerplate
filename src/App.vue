<template>
  <NavBar/>
  <Home/>
  <About/>
</template>

<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import Home from '@/views/Home.vue';
  import About from '@/views/About.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
