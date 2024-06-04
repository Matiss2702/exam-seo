<template>
  <div class="grid items-center grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 group/conservationhero">
    <div class="flex flex-col gap-y-1 sm:gap-y-2.5 lg:gap-y-3.5">
      <div>
        <h1 class="">{{ title }}</h1>
        <NuxtImg class="object-cover w-full transition-transform duration-300 h-72 rounded-3xl" :src="firstImageSrc" />
      </div>
      <div>
        <p class="">
          {{ firstParagraph }}
        </p>
        <NuxtImg class="object-cover w-full transition-transform duration-300 h-72 rounded-3xl" :src="secondImageSrc" />
      </div>
      <div>
        <p class="">
          {{ secondParagraph }}
        </p>
        <NuxtImg class="object-cover w-full transition-transform duration-300 h-72 rounded-3xl" :src="thirdImageSrc" />
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
