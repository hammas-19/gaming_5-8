<template>
<div class="h-[calc(100vh-400px)]">
  <!-- <span v-for="(items, index) in apiData" :key="index">{{ items.name }}</span> -->
  <div v-for="(items, index) in apiData" :key="index">
    <span>{{ items.image.medium }}</span>
    <img :src="items.image" alt="">
  </div>
</div>
</template>
<script setup>
import axios from 'axios'
const apiData = ref([])

axios('https://api.tvmaze.com/shows', {
  method: 'GET'

}).then((response) => {
  apiData.value = response.data
})
</script>
