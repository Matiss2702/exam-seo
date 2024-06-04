<template>
    <div
        class="flex flex-col gap-y-4 justify-between items-end border p-4 border-black/[0.1] rounded-lg hover:scale-105 duration-300 transition-transform"
    >
        <div class="flex flex-col gap-y-1.5">
            <h3 class="text-2xl font-pally font-medium">{{ title }}</h3>
            <p class="text-pretty">{{ paragraph }}</p>
        </div>
        <nuxt-link
            :to="linkPath"
            class="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-50 rounded-lg hover:opacity-85"
            >{{ linkName }}</nuxt-link
        >
    </div>
</template>

<script setup>
defineProps({
    title: String,
    paragraph: String,
    linkPath: String,
    linkName: String,
});
</script>
