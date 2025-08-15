<script setup>
import Section from "./components/Section.vue";
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="main">
    <Aside/>
    <Header/>
    <Section/>
  </div>
</template>

<style scoped>
.main{
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
