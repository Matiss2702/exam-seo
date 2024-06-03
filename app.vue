<template>
    <div class="font-neco flex flex-col gap-y-8">
        <Navbar />
        <NuxtPage />
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
