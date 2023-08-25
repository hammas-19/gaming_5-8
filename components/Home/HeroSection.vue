<template>
  <div class="h-[calc(100vh-400px)] overflow-hidden">
    <!-- <pre>{{ apiData?.name }}</pre> -->
    <div v-if="apiData" class="relative h-full w-full">
      <img :src="apiData?.image?.original" class="absolute h-full w-full object-cover object-bottom z-0" alt="">
      <div class="flex justify-between md:flex-row flex-col gap-10 h-full border-2 items-center max-w-7xl mx-auto">
        <div class=" flex flex-col gap-4 p-5 rounded-3xl bg-[#302f2f7c] backdrop-blur-sm text-white z-20 relative max-w-sm">
          <h3 class="text-6xl font-semibold">
            {{ apiData?.name }}
          </h3>
          <div class="flex flex-wrap gap-1">
            <span class="bg-[#abf5a8] text-BalticSea px-2 rounded-md mr-2 font-medium">Genres</span>
            <span v-for="(items) in apiData?.genres" :key="items" class="">{{ items }},</span>
          </div>
          <span class="font-medium">{{ apiData?.premiered }} - {{ apiData?.ended }}</span>
          <div class="flex flex-wrap gap-1 items-center">
            <span class="bg-bananaYellow text-BalticSea p-1 rounded-md mr-1 font-bold">Imdb</span>
            <span class="text-4xl font-semibold">{{ apiData?.rating?.average }}<span class="text-sm">/10</span> </span>
          </div>
          <!-- <span class="bg-[#abf5a8] text-BalticSea px-3 py-1 rounded-md w-fit text-xl font-medium">Watch Now</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
const apiData = ref([])
axios('https://api.tvmaze.com/shows/6', {
  // method: 'GET'

}).then((response) => {
  apiData.value = response.data
})
</script>
