<template>
  <div class="relative overflow-hidden rounded-xl text-neutral-950 group/conservationcard">
    <NuxtImg class="object-cover size-full rounded-xl max-h-72" :src="imageSrc" :alt="imageAlt" />
    <span
      class="absolute bottom-0 z-10 w-full p-2 text-xl text-center transition-all duration-300 translate-y-32 bg-primary-950/85 font-pally text-neutral-50 group-hover/conservationcard:-translate-y-0"
    >
      {{ title }}</span
    >
  </div>
</template>

<script setup>
defineProps({
  title: String,
  imageSrc: String,
  imageAlt: String,
});
</script>
