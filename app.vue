<template>
  <div class="font-neco">
    <Navbar />
    <main class="mt-4 mb-12">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* La hauteur minimum de la page est la hauteur de la fenêtre du navigateur */
}

main {
  flex-grow: 1;
  /* Le contenu principal prendra toute la hauteur restante */
}

.footer {
  margin-top: auto;
  /* Le footer sera toujours en bas de la page */
}
</style>
