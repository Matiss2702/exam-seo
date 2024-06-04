<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center group/conservationhero">
    <div
      class="flex flex-col gap-y-1 sm:gap-y-2.5 lg:gap-y-3.5 sm:group-hover/conservationhero:translate-x-4 transition-transform duration-300"
    >
      <h1 class="title">{{ title }}</h1>
      <p class="">
        {{ paragraph }}
      </p>
    </div>
    <NuxtImg
      class="w-full h-72 object-cover rounded-3xl sm:group-hover/conservationhero:-translate-x-4 transition-transform duration-300"
      :src="imageSrc"
    />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  paragraph: String,
  imageSrc: String,
});
</script>
