<template>
    <div class="w-full h-[50vh] rounded-3xl relative group/plantation overflow-hidden">
        <div
            class="absolute z-[1] top-1/2 max-sm:p-5 max-sm:w-full -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-y-2 sm:gap-y-4"
        >
            <h1 class="text-neutral-50 text-4xl lg:text-6xl lg:max-w-[46.5rem] font-pally font-medium">
                <span class="text-primary-200">Éducation Écologique</span> pour un Terrain Confus
            </h1>
            <!-- <h2 class="text-3xl lg:text-5xl font-pally text-neutral-950 font-medium">{{ title }}</h2> -->
            <p class="text-neutral-50 lg:max-w-[41.5rem] text-lg lg:text-xl">
                Découvrez comment protéger notre environnement en apprenant les bonnes pratiques pour la conservation
                des sols, la gestion de l'eau et la préservation de la biodiversité.
            </p>
        </div>
        <NuxtImg
            class="size-full object-cover rounded-3xl brightness-[0.45] group-hover/plantation:scale-105 transition-transform duration-300"
            src="/plantation.png"
        />
    </div>
</template>

<script setup></script>
