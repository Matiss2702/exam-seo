<template>
  <div class="flex flex-col gap-y-8">
    <div class="flex flex-col gap-y-4 group/footerpagestitle">
      <h1 class="title text-center">{{ title }}</h1>
      <div class="h-72 overflow-hidden rounded-3xl">
        <NuxtImg
          class="object-cover size-full transition-transform duration-300 rounded-3xl group-hover/footerpagestitle:scale-105"
          :src="firstImageSrc"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div class="flex flex-col gap-y-4 rounded-3xl">
        <div class="h-56 md:h-72 rounded-3xl overflow-hidden group/footerpagesfirstparagraph">
          <NuxtImg
            class="object-cover size-full transition-transform duration-300 rounded-3xl group-hover/footerpagesfirstparagraph:scale-105"
            :src="secondImageSrc"
          />
        </div>
        <p class="md:text-lg text-pretty">
          {{ firstParagraph }}
        </p>
      </div>
      <div class="flex flex-col gap-y-4">
        <div class="h-56 md:h-72 rounded-3xl overflow-hidden group/footerpagessecondparagraph">
          <NuxtImg
            class="object-cover size-full transition-transform duration-300 rounded-3xl group-hover/footerpagessecondparagraph:scale-105"
            :src="thirdImageSrc"
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
});
</script>
