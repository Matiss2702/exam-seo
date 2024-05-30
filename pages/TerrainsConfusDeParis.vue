<template>
  <div class="page">
    <article>
      <header>
        <h1>{{ title }}</h1>
        <p>{{ introduction }}</p>
      </header>
      <section v-for="section in sections" :key="section.id">
        <h2>{{ section.heading }}</h2>
        <p>{{ section.content }}</p>
        <img v-if="section.image" :src="section.image.src" :alt="section.image.alt" />
      </section>
      <footer>
        <p>{{ conclusion }}</p>
        <div class="navigation">
          <h3>Explorez d'autres sujets :</h3>
          <ul>
            <li><nuxt-link to="/conservationdessols">Conservation des Sols</nuxt-link></li>
            <li><nuxt-link to="/gestiondeleau">Gestion de l'Eau</nuxt-link></li>
            <li><nuxt-link to="/biodiversite">Biodiversité</nuxt-link></li>
            <li><nuxt-link to="/VenteTerrainConfus">Vente Terrain Confus</nuxt-link></li>
            <li><nuxt-link to="/TerrainsConfusDeParis">Terrains Confus de Paris</nuxt-link></li>
            <li><nuxt-link to="/HistoireTerrainsConfusDeParis">Histoire des Terrains Confus de Paris</nuxt-link></li>
          </ul>
        </div>
      </footer>
    </article>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const title = ref("Les Terrains Confus de Paris : Une Exploration Urbaine");
  const introduction = ref("Paris est célèbre pour ses monuments emblématiques, mais la ville cache aussi des 'terrains confus', des espaces urbains en transition qui offrent une perspective unique sur la dynamique urbaine.");
  const sections = ref([
    {
      id: 1,
      heading: "Qu'est-ce qu'un Terrain Confus ?",
      content: "Les terrains confus sont des espaces urbains qui échappent à une classification précise. Ils peuvent être des friches industrielles, des terrains vagues, ou des zones en cours de réaménagement. Ces zones offrent une multitude d'usages potentiels et sont souvent le reflet des dynamiques économiques et sociales de la ville.",
      image: { src: '/terrain confus.jpg', alt: "Exemple de terrain confus à Paris" }
    },
    {
      id: 2,
      heading: "L'Importance des Terrains Confus à Paris",
      content: "Ces espaces sont cruciaux pour comprendre l'évolution urbaine. Ils offrent des opportunités pour la biodiversité, des espaces pour l'expression artistique, et des zones pour de futurs projets de développement. Par exemple, des jardins communautaires peuvent émerger dans ces zones, offrant des espaces verts précieux en milieu urbain.",
      image: { src: '/terrainconfus.jpg', alt: "Un jardin communautaire sur un terrain confus" }
    },
    {
      id: 3,
      heading: "Exemples de Terrains Confus à Paris",
      content: "Parmi les exemples célèbres, on trouve la Petite Ceinture, une ancienne voie ferrée qui serpente autour de Paris, ou encore les friches industrielles de la Plaine Saint-Denis. Ces zones sont devenues des lieux de promenade, de biodiversité urbaine, et de création artistique.",
      image: { src: '/terrain confus.jpg', alt: "La Petite Ceinture à Paris" }
    },
    {
      id: 4,
      heading: "L'Avenir des Terrains Confus",
      content: "Ces terrains sont souvent au cœur de projets de réhabilitation urbaine. Ils peuvent devenir des parcs, des centres culturels ou des zones résidentielles, transformant ainsi le paysage urbain. L'implication des communautés locales dans la planification et l'utilisation de ces espaces est essentielle pour leur succès futur.",
      image: { src: '/terrainconfus.jpg', alt: "Projet de réhabilitation d'un terrain confus" }
    }
  ]);
  const conclusion = ref("Les terrains confus de Paris sont des espaces fascinants qui reflètent la complexité et la dynamique de la ville. Ils offrent un aperçu unique de l'évolution urbaine et de la manière dont nous pouvons réimaginer les espaces urbains.");
  useHead({
    title: 'Les Terrains Confus de Paris : Une Exploration Urbaine',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Découvrez les terrains confus de Paris, des espaces urbains uniques en transition qui offrent une perspective fascinante sur la dynamique urbaine et des opportunités de développement.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'terrain confus, Paris, espaces urbains, réaménagement, friches industrielles, Petite Ceinture, Plaine Saint-Denis'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Les Terrains Confus de Paris : Une Exploration Urbaine'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Découvrez les terrains confus de Paris, des espaces urbains uniques en transition qui offrent une perspective fascinante sur la dynamique urbaine et des opportunités de développement.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/terrain confus.jpg'
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
        content: 'Les Terrains Confus de Paris : Une Exploration Urbaine'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Découvrez les terrains confus de Paris, des espaces urbains uniques en transition qui offrent une perspective fascinante sur la dynamique urbaine et des opportunités de développement.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/terrain confus.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  })
  </script>
  
  <style scoped>
  article {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  header h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    color: #2c3e50;
    text-align: center;
  }
  
  header p {
    font-size: 1.2em;
    margin-bottom: 1em;
    text-align: center;
  }
  
  section {
    margin-top: 2em;
  }
  
  section h2 {
    font-size: 1.8em;
    margin-top: 1.5em;
    color: #34495e;
  }
  
  section p {
    font-size: 1.1em;
    margin-top: 0.5em;
    text-align: justify;
  }
  
  section img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1em 0;
    border: 2px solid #ddd;
    border-radius: 8px;
  }
  
  footer p {
    font-size: 1.3em;
    margin-top: 2em;
    font-weight: bold;
    text-align: center;
    color: #16a085;
  }
  .page {
    padding: 20px;
  }
  .navigation {
  margin-top: 2em;
  text-align: center;
}

.navigation h3 {
  font-size: 1.5em;
  color: #2c3e50;
}

.navigation ul {
  list-style-type: none;
  padding: 0;
}

.navigation li {
  display: inline;
  margin: 0 10px;
}

.navigation a {
  color: #007bff;
  text-decoration: none;
}

.navigation a:hover {
  text-decoration: underline;
}

  </style>
  