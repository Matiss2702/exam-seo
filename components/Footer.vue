<template>
  <footer class="py-4 text-sm bg-primary-700 text-neutral-50 font-pally">
    <div class="container flex justify-between max-md:gap-y-2 max-md:flex-col max-md:items-center">
      <div class="flex max-xs:flex-col max-xs:gap-y-2 max-xs:text-center max-md:order-last gap-x-0.5">
        <p class="max-md:text-center">&copy; 2024 Éducation Écologique Terrian confus.</p>
        <p>Tous droits réservés.</p>
      </div>
      <ul class="flex gap-x-4">
        <li class="hover:opacity-80"><nuxt-link to="/apropos">À propos</nuxt-link></li>
        <li class="hover:opacity-80"><nuxt-link to="/contact">Contact</nuxt-link></li>
        <li class="hover:opacity-80">
          <nuxt-link to="/politiquedeconfidentialite">Politique de confidentialité</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup></script>
