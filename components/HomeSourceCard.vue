<template>
    <div class="border border-primary-200 relative rounded-xl">
        <NuxtImg class="size-full object-cover rounded-xl" :src="imageSrc" />
        <nuxt-link :to="path" class="text-neutral-50 absolute left-0 bottom-0">{{ title }}</nuxt-link>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    path: String,
    imageSrc: String,
});
</script>
