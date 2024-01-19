<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <RouterLink to="/">Contact</RouterLink>
    <RouterLink to="/call">Call</RouterLink>
    <RouterLink to="/clavier">Clavier</RouterLink>
  </header>

  <RouterView />  
</template>

<style scoped>
/* Your styles here */

 nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
 }

 header{
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 3vh;
  grid-row: 1/3;
  grid-column: 1/2;
 }

  a{
    color: white;
    text-decoration: none;
    font-size: 2em;
  }


</style>
