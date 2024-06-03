<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 items-center gap-x-16 lg:gap-x-24 max-sm:gap-y-2 group/homecard">
        <div
            :class="[
                'flex flex-col gap-y-1 sm:gap-y-3 transition-transform duration-300',
                reverse ? 'sm:order-last group-hover/homecard:-translate-x-4' : 'group-hover/homecard:translate-x-4',
            ]"
        >
            <h2 class="title">{{ title }}</h2>
            <p class="sm:text-lg">{{ text }}</p>
        </div>
        <NuxtImg
            :class="[
                'w-full h-72 object-cover rounded-2xl transition-transform duration-300',
                reverse ? 'group-hover/homecard:translate-x-4' : 'group-hover/homecard:-translate-x-4',
            ]"
            :src="imageSrc"
        />
    </section>
</template>

<script setup>
defineProps({
    title: String,
    text: String,
    imageSrc: String,
    reverse: Boolean,
});
</script>
