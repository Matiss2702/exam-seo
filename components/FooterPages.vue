<template>
  <div class="flex flex-col gap-y-8">
    <div class="flex flex-col gap-y-4">
      <h1 class="title text-center">{{ title }}</h1>
      <NuxtImg class="object-cover w-full transition-transform duration-300 h-72 rounded-3xl" :src="firstImageSrc" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div class="flex flex-col gap-y-4">
        <NuxtImg
          class="object-cover w-full transition-transform duration-300 h-56 md:h-72 rounded-3xl"
          :src="secondImageSrc"
        />
        <p class="md:text-lg text-pretty">
          {{ firstParagraph }}
        </p>
      </div>
      <div class="flex flex-col gap-y-4">
        <NuxtImg
          class="object-cover w-full transition-transform duration-300 h-56 md:h-72 rounded-3xl"
          :src="thirdImageSrc"
        />
        <p class="md:text-lg text-pretty">
          {{ secondParagraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  firstParagraph: String,
  secondParagraph: String,
  firstImageSrc: String,
  secondImageSrc: String,
  thirdImageSrc: String,
});
</script>
