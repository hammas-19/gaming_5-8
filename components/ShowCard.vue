<template>
  <div class="max-w-xs rounded-2xl overflow-hidden h-[420px]">
    <a href="#" class="group relative block bg-black">
      <img
        alt="Developer"
        :src="props.movieData.image.medium"
        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30 group-hover:blur-sm"
      >

      <div class="relative p-4 sm:p-6 lg:p-8">
        <p class="text-sm font-medium uppercase tracking-widest text-white">
          {{ props.movieData.rating.average }}
        </p>

        <p class="text-2xl font-bold text-white">
          {{ props.movieData.name }}
        </p>

        <div class="mt-32 sm:mt-48 lg:mt-64">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-10 group-hover:opacity-100"
          >
            <p class="text-base text-white line-clamp-6" v-html="props.movieData.summary" />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
  movieData: {
    type: Object,
    default: {}
  }
})
</script>
