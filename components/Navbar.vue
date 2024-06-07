<template>
  <!-- Div qui doit faire la taille des différentes navbar !!! -->
  <div class="h-[70.8px] md:h-[86.39px]" />
  <!-- Menu de navigation -->
  <header class="fixed top-0 left-0 right-0 z-50 py-3 text-sm backdrop-blur-lg bg-white/65 max-md:px-0">
    <!-- Navbar Tablette / Pc  -->
    <nav class="container">
      <ul class="flex items-center text-base gap-x-8 font-pally max-md:hidden">
        <li class="hover:text-primary-400">
          <nuxt-link to="/conservationdessols" class="">Conservation des Sols</nuxt-link>
        </li>
        <li class="hover:text-primary-400">
          <nuxt-link to="/gestiondeleau" class="">Gestion de l'Eau</nuxt-link>
        </li>
        <li class="flex justify-center flex-1">
          <nuxt-link class="transition-transform duration-300 hover:scale-105" to="/">
            <NuxtImg width="48" src="/logo.svg" alt="Logo Terrain Confus" />
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
    <div class="container flex items-center justify-between md:hidden">
      <nuxt-link class="transition-transform duration-300 hover:scale-105" to="/">
        <NuxtImg width="36" height="36" src="/logo.svg" alt="Logo Terrain Confus" />
      </nuxt-link>
      <button
        aria-label="Menu"
        @click="toggleNav"
        class="flex justify-center transition-colors duration-200 hover:text-primary-400"
      >
        <LucideMenu size="24" />
      </button>
    </div>
    <!-- Menu Navbar Mobile -->
    <nav :class="!isNavOpen && 'hidden'">
      <ul class="flex flex-col items-center text-base gap-y-8 font-pally z-[9999]">
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
