<template>
  <nav class="navbar">
    <!-- <div class="container flex justify-between items-center">
      <a class="navbar-brand" href="/">Éducation Écologique</a>
      Menu hamburger pour les petits écrans
      <button @click="toggleNav" class="burger-menu lg:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div> -->
    <!-- Menu de navigation -->
    <ul :class="{ 'hidden': !isNavOpen }" class="navbar-nav lg:flex lg:items-center ml-auto">
      <li class="nav-item">
        <nuxt-link to="/conservationdessols" class="nav-link">Conservation des Sols</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/gestiondeleau" class="nav-link">Gestion de l'Eau</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/biodiversite" class="nav-link">Biodiversité</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="#" class="nav-link">Terrain Confus</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

<style scoped>
.navbar {
  background-color: #007bff;
  color: #fff;
  padding: 10px 0;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; /* Pour les petits écrans, afficher les éléments verticalement */
  align-items: center; /* Centrer les éléments horizontalement */
}

.nav-item {
  margin-top: 10px; /* Ajouter un espace entre chaque élément */
}

.nav-link {
  color: #fff;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Menu hamburger */
.burger-menu {
  cursor: pointer;
}

/* Menu de navigation pour les grands écrans */
@media (min-width: 768px) {
  .navbar-nav {
    flex-direction: row; /* Afficher les éléments horizontalement */
    align-items: center; /* Aligner les éléments au centre */
  }
  .nav-item {
    margin-left: 20px; /* Ajuster l'espacement entre les éléments */
    margin-top: 0; /* Réinitialiser la marge pour les grands écrans */
  }
}
</style>
