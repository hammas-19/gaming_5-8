<template>
  <div class="max-w-7xl px-5 mx-auto">
    <div class="flex items-center justify-between text-white">
      <h1 class="text-4xl pb-5">
        New
      </h1>
      <span class="cursor-pointer text-base">
        See More
      </span>
    </div>
    <div class="flex flex-wrap gap-8 justify-between bg-[#c9c9c9] p-5 rounded-2xl h-[calc(100vh-300px)] overflow-y-scroll">
      <template v-for="movie, index in apiData.slice(0, 10)" :key="index">
        <NuxtLink :to="'/slug/' + movie.id">
          <ShowCard :movie-data="movie" />
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
const apiData = ref([])
axios('https://api.tvmaze.com/shows', {
  // method: 'GET'

}).then((response) => {
  apiData.value = response.data
})
</script>
