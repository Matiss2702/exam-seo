<template>
  <div class="home">
    <h1>Bienvenue sur Éducation Écologique pour un Terrain Confus</h1>
    <p>Découvrez comment protéger notre environnement en apprenant les bonnes pratiques pour la conservation des sols, la gestion de l'eau et la préservation de la biodiversité.</p>

    <section>
      <h2>Notre Mission</h2>
      <p>Chez Éducation Écologique, notre mission est de sensibiliser le public aux enjeux écologiques et de promouvoir des pratiques durables pour préserver la biodiversité et les ressources naturelles.</p>
    </section>

    <section>
      <h2>Pourquoi Préserver les Terrains Confus ?</h2>
      <p>Les terrains confus, souvent oubliés, jouent un rôle crucial dans le maintien de la biodiversité urbaine. Ils servent de refuge à de nombreuses espèces et contribuent à la résilience écologique des villes.</p>
    </section>

    <section>
      <h2>Actions et Initiatives</h2>
      <p>Nous menons diverses initiatives pour la conservation des terrains confus, incluant des campagnes de plantation, des ateliers éducatifs et des collaborations avec des organisations locales et internationales.</p>
      <ul>
        <li><a href="https://www.wwf.fr" target="_blank" rel="noopener">WWF France</a></li>
        <li><a href="https://www.greenpeace.org/france" target="_blank" rel="noopener">Greenpeace France</a></li>
        <li><a href="https://www.fao.org" target="_blank" rel="noopener">FAO</a></li>
      </ul>
    </section>

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
      <div class="topic">
        <h2>Polémique Terrains Confus Paris</h2>
        <p>Les terrains confus à Paris sont au cœur d'une polémique intense. Découvrons les différents points de vue et les enjeux qui entourent ces espaces urbains en transition.</p>
        <nuxt-link to="/PolemiqueTerrainsConfusParis" class="btn">En savoir plus</nuxt-link>
      </div>
      <div class="topic">
        <h2>Vente Terrain Confus</h2>
        <p>Découvrez comment et où acheter des terrains confus à Paris et dans d'autres régions, ainsi que les opportunités d'investissement qu'ils offrent.</p>
        <nuxt-link to="/VenteTerrainConfus" class="btn">En savoir plus</nuxt-link>
      </div>
      <div class="topic">
        <h2>Terrains Confus de Paris</h2>
        <p>Apprenez tout sur les terrains confus de Paris, leur emplacement, leur importance et les défis associés à leur gestion.</p>
        <nuxt-link to="/TerrainsConfusDeParis" class="btn">En savoir plus</nuxt-link>
      </div>
      <div class="topic">
        <h2>Histoire des Terrains Confus de Paris</h2>
        <p>Découvrez l'histoire fascinante des terrains confus de Paris, de leur origine à leur rôle actuel dans la ville.</p>
        <nuxt-link to="/HistoireTerrainsConfusDeParis" class="btn">En savoir plus</nuxt-link>
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
      content: 'Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions. Apprenez comment protéger notre environnement en adoptant des pratiques durables pour la conservation des sols, la gestion de l\'eau et la préservation de la biodiversité.'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'terrain confus, terrains à Paris, achat terrain, terrains historiques, conservation des sols, gestion de l\'eau, biodiversité, environnement'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Terrain Confus - Découvrez les terrains confus à Paris et ailleurs'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions. Apprenez comment protéger notre environnement en adoptant des pratiques durables pour la conservation des sols, la gestion de l\'eau et la préservation de la biodiversité.'
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
      content: 'Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions. Apprenez comment protéger notre environnement en adoptant des pratiques durables pour la conservation des sols, la gestion de l\'eau et la préservation de la biodiversité.'
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
});
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

section {
  margin: 40px 0;
}

section h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #2c3e50;
}

section p {
  font-size: 1.1em;
  margin-bottom: 20px;
  text-align: justify;
}

section ul {
  list-style-type: none;
  padding: 0;
}

section ul li {
  margin-bottom: 10px;
}

section ul li a {
  color: #007bff;
  text-decoration: none;
}

section ul li a:hover {
  text-decoration: underline;
}
</style>
