<template>
    <div class="home">
        <h1>Bienvenue sur Éducation Écologique pour un Terrain Confus</h1>
        <p>Découvrez comment protéger notre environnement en apprenant les bonnes pratiques pour la conservation des sols, la gestion de l'eau et la préservation de la biodiversité.</p>
        <div class="featured-topics">
            <div class="topic">
                <h2>Conservation des Sols pour Prévenir un Terrain Confus</h2>
                <p>Explorez l'importance de la conservation des sols pour éviter un terrain confus et préserver sa santé.</p>
                <nuxt-link to="/conservationdessols" class="btn">En savoir plus</nuxt-link>
            </div>
            <div class="topic">
                <h2>Gestion de l'Eau pour un Terrain Confus : Maintenir la Clarté et l'Équilibre</h2>
                <p>Découvrez des stratégies de gestion durable de l'eau pour prévenir un terrain confus et maintenir la clarté ainsi que l'équilibre de votre environnement.</p>
                <nuxt-link to="/gestiondeleau" class="btn">En savoir plus</nuxt-link>
            </div>
            <div class="topic">
                <h2>Biodiversité pour un Terrain Confus : Préserver la Clarté et la Richesse Naturelle</h2>
                <p>Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus.</p>
                <nuxt-link to="/biodiversite" class="btn">En savoir plus</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  title: 'Terrain Confus - Découvrez les terrains confus à Paris et ailleurs',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions.'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'terrain confus, terrains à Paris, achat terrain, terrains historiques'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Terrain Confus - Découvrez les terrains confus à Paris et ailleurs'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: '/favicon.ico'
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.confus-terrain.com'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Terrain Confus - Découvrez les terrains confus à Paris et ailleurs'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions.'
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: '/favicon.ico'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style scoped>
.home {
    padding: 20px;
    text-align: center;
}

.featured-topics {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
}

.topic {
    flex: 1;
    padding: 20px;
    margin: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 300px;
    margin-bottom: 20px;
}

.topic h2 {
    margin-top: 0;
}

.topic p {
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    padding: 8px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

.btn:hover {
    background-color: #0056b3;
}
</style>
