<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Éducation Écologique Terrian confus. Tous droits réservés.</p>
      <ul class="footer-nav">
        <li><nuxt-link to="/apropos">À propos</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        <li><nuxt-link to="/politiquedeconfidentialite">Politique de confidentialité</nuxt-link></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
// import { defineProps } from 'vue'

// defineProps({
//   // Add any props if needed
// })

// Data, methods, etc.
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  color: #333;
  padding: 20px 0;
  text-align: center;
}

.footer p {
  margin-bottom: 10px;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav li {
  display: inline-block;
  margin-right: 10px;
}

.footer-nav li a {
  color: #333;
  text-decoration: none;
}

.footer-nav li a:hover {
  text-decoration: underline;
}
</style>
