<template>
  <div class="flex flex-col gap-y-8">
    <div class="flex flex-col gap-y-4 group/footerpagestitle">
      <h1 class="text-center title">{{ title }}</h1>
      <div class="overflow-hidden h-72 rounded-3xl">
        <NuxtImg
          class="object-cover transition-transform duration-300 size-full rounded-3xl group-hover/footerpagestitle:scale-105"
          :src="firstImageSrc"
          :alt="firstImageAlt"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div class="flex flex-col gap-y-4 rounded-3xl">
        <div class="h-56 overflow-hidden md:h-72 rounded-3xl group/footerpagesfirstparagraph">
          <NuxtImg
            class="object-cover transition-transform duration-300 size-full rounded-3xl group-hover/footerpagesfirstparagraph:scale-105"
            :src="secondImageSrc"
            :alt="secondImageAlt"
          />
        </div>
        <p class="md:text-lg text-pretty">
          {{ firstParagraph }}
        </p>
      </div>
      <div class="flex flex-col gap-y-4">
        <div class="h-56 overflow-hidden md:h-72 rounded-3xl group/footerpagessecondparagraph">
          <NuxtImg
            class="object-cover transition-transform duration-300 size-full rounded-3xl group-hover/footerpagessecondparagraph:scale-105"
            :src="thirdImageSrc"
            :alt="thirdImageAlt"
          />
        </div>
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
  firstImageAlt: String,
  secondImageAlt: String,
  thirdImageAlt: String,
});
</script>
