<template>
  <a
    :href="path"
    class="relative overflow-hidden rounded-xl text-neutral-950 group/homesourcecard"
    target="_blank"
    rel="noopener noreferrer"
  >
    <NuxtImg class="object-cover size-full rounded-xl" :src="imageSrc" :alt="imageAlt" />
    <span
      class="absolute bottom-0 z-10 w-full py-2 text-xl text-center transition-all duration-300 translate-y-12 bg-primary-950/85 font-pally text-neutral-50 group-hover/homesourcecard:-translate-y-0"
    >
      {{ title }}</span
    >
  </a>
</template>

<script setup>
defineProps({
  title: String,
  path: String,
  imageSrc: String,
  imageAlt: String,
});
</script>
