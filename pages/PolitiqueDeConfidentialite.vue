<template>
    <div class="page">
        <h1>Politique de Confidentialité de Éducation Écologique pour un Terrain Confus</h1>
        <p>Chez Éducation Écologique, nous attachons une grande importance à la protection de votre vie privée et à la
            sécurité de vos données personnelles. Notre politique de confidentialité vise à vous informer sur la manière
            dont nous collectons, utilisons et protégeons vos informations.</p>
        <p>Nous nous engageons à ne jamais partager vos données personnelles avec des tiers sans votre consentement
            explicite. De plus, nous utilisons des mesures de sécurité avancées pour protéger vos informations contre
            tout accès non autorisé ou utilisation abusive.</p>
        <p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, n'hésitez pas
            à nous contacter.</p>
    </div>
</template>

<script setup>
    useHead({
        title: 'Politique de Confidentialité - Éducation Écologique pour un Terrain Confus',
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: 'Chez Éducation Écologique, nous attachons une grande importance à la protection de votre vie privée et à la sécurité de vos données personnelles sur les terrains confus. Découvrez notre politique de confidentialité.'
            },
            {
            hid: 'keywords',
            name: 'keywords',
            content: 'politique de confidentialité, terrain confus, protection des données, vie privée'
            },
            {
            hid: 'og:title',
            property: 'og:title',
            content: 'Politique de Confidentialité - Éducation Écologique pour un Terrain Confus'
            },
            {
            hid: 'og:description',
            property: 'og:description',
            content: 'Chez Éducation Écologique, nous attachons une grande importance à la protection de votre vie privée et à la sécurité de vos données personnelles sur les terrains confus. Découvrez notre politique de confidentialité.'
            },
            {
            hid: 'og:image',
            property: 'og:image',
            content: '/favicon.ico'
            },
            {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://www.confus-terrain.com/politique-de-confidentialite'
            },
            {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image'
            },
            {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'Politique de Confidentialité - Éducation Écologique pour un Terrain Confus'
            },
            {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: 'Chez Éducation Écologique, nous attachons une grande importance à la protection de votre vie privée et à la sécurité de vos données personnelles sur les terrains confus. Découvrez notre politique de confidentialité.'
            },
            {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: '/favicon.ico'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    })
</script>

<style scoped>
.page {
    padding: 20px;
}
</style>
