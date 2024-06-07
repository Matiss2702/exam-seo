<template>
  <div class="grid items-center grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 group/conservationhero">
    <div
      class="flex flex-col gap-y-1 sm:gap-y-2.5 lg:gap-y-3.5 sm:group-hover/conservationhero:translate-x-4 transition-transform duration-300"
    >
      <h1 class="title">{{ title }}</h1>
      <p class="">
        {{ paragraph }}
      </p>
    </div>
    <NuxtImg
      class="object-cover w-full transition-transform duration-300 h-72 rounded-3xl sm:group-hover/conservationhero:-translate-x-4"
      :src="imageSrc"
      :alt="imageAlt"
    />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  paragraph: String,
  imageSrc: String,
  imageAlt: String,
});
</script>
