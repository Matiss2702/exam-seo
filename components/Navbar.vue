<template>
    <!-- Div qui doit faire la taille des différentes navbar !!! -->
    <div class="h-[70.8px] md:h-[86.39px]" />
    <!-- Menu de navigation -->
    <header class="py-3 text-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/65 max-md:px-0">
        <!-- Navbar Tablette / Pc  -->
        <nav class="container">
            <ul class="flex gap-x-8 items-center font-pally text-base max-md:hidden">
                <li class="hover:text-primary-400">
                    <nuxt-link to="/conservationdessols" class="">Conservation des Sols</nuxt-link>
                </li>
                <li class="hover:text-primary-400">
                    <nuxt-link to="/gestiondeleau" class="">Gestion de l'Eau</nuxt-link>
                </li>
                <li class="flex-1 justify-center flex">
                    <nuxt-link class="hover:scale-105 duration-300 transition-transform" to="/">
                        <NuxtImg width="48" src="/logo.svg" />
                    </nuxt-link>
                </li>
                <li class="hover:text-primary-400">
                    <nuxt-link to="/biodiversite" class="">Biodiversité</nuxt-link>
                </li>
                <li class="hover:text-primary-400">
                    <nuxt-link to="#" class="">Terrain Confus</nuxt-link>
                </li>
            </ul>
        </nav>
        <!-- Navbar Mobile -->
        <div class="flex justify-between md:hidden items-center container">
            <nuxt-link class="hover:scale-105 duration-300 transition-transform" to="/">
                <NuxtImg width="36" src="/logo.svg" />
            </nuxt-link>
            <button
                @click="toggleNav"
                class="flex justify-center hover:text-primary-400 transition-colors duration-200"
            >
                <LucideMenu size="24" />
            </button>
        </div>
        <!-- Menu Navbar Mobile -->
        <nav :class="!isNavOpen && 'hidden'">
            <ul class="flex flex-col gap-y-8 items-center font-pally text-base">
                <li class="hover:text-primary-500">
                    <nuxt-link to="/conservationdessols" class="">Conservation des Sols</nuxt-link>
                </li>
                <li class="hover:text-primary-500">
                    <nuxt-link to="/gestiondeleau" class="">Gestion de l'Eau</nuxt-link>
                </li>
                <li class="hover:text-primary-500">
                    <nuxt-link to="/biodiversite" class="">Biodiversité</nuxt-link>
                </li>
                <li class="hover:text-primary-500">
                    <nuxt-link to="#" class="">Terrain Confus</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";

const isNavOpen = ref(false);

const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
};
</script>
