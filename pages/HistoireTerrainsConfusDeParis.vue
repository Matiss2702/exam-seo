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
      </footer>
    </article>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const title = ref("L'Histoire et l'Évolution des Terrains Confus à Paris");
  const introduction = ref("Découvrez comment les terrains confus, ces espaces urbains en transition, ont évolué à Paris au fil du temps, reflétant les changements économiques et sociaux de la ville.");
  const sections = ref([
    {
      id: 1,
      heading: "Origines des Terrains Confus",
      content: "Les terrains confus à Paris trouvent souvent leurs origines dans les anciens sites industriels ou ferroviaires. Ces espaces ont été abandonnés ou sous-utilisés, créant des zones en marge du développement urbain traditionnel.",
      image: { src: '/terrain confus.jpg', alt: "Origines des terrains confus à Paris" }
    },
    {
      id: 2,
      heading: "L'Impact des Transformations Industrielles",
      content: "Avec le déclin de certaines industries et l'évolution des infrastructures urbaines, de nombreux terrains confus ont émergé. Ces espaces sont devenus des symboles de la transition industrielle et de la modernisation de Paris.",
      image: { src: '/terrconfuss.jpg', alt: "Transformation industrielle des terrains confus" }
    },
    {
      id: 3,
      heading: "Utilisation et Réappropriation Actuelle",
      content: "Aujourd'hui, de nombreux terrains confus sont réappropriés par les communautés locales et les artistes. Ils deviennent des espaces de création, des jardins communautaires, ou des sites temporaires pour des événements culturels.",
      image: { src: '/terrconf.jpg', alt: "Réappropriation des terrains confus" }
    },
    {
      id: 4,
      heading: "Futurs Développements et Perspectives",
      content: "L'avenir des terrains confus à Paris est prometteur. Avec des projets de réhabilitation en cours, ces espaces pourraient devenir des hubs d'innovation et des modèles de développement urbain durable.",
      image: { src: '/terrainconfus.jpg', alt: "Développements futurs des terrains confus" }
    }
  ]);
  const conclusion = ref("Les terrains confus de Paris illustrent parfaitement l'évolution de la ville. En comprenant leur histoire et leur transformation, nous pouvons mieux appréhender les défis et les opportunités qu'ils représentent pour le futur urbain.");
  useHead({
  title: "L'Histoire et l'Évolution des Terrains Confus à Paris",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Découvrez l'histoire et l'évolution des terrains confus à Paris. Explorez comment ces espaces urbains en transition ont reflété les changements économiques et sociaux de la ville au fil du temps."
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'terrain confus, Paris, histoire, évolution, transformation industrielle, réappropriation, développement urbain'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: "L'Histoire et l'Évolution des Terrains Confus à Paris"
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: "Découvrez l'histoire et l'évolution des terrains confus à Paris. Explorez comment ces espaces urbains en transition ont reflété les changements économiques et sociaux de la ville au fil du temps."
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: '/terrain confus.jpg'
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.confus-terrain.com/histoire-evolution-terrain-confus'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: "L'Histoire et l'Évolution des Terrains Confus à Paris"
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: "Découvrez l'histoire et l'évolution des terrains confus à Paris. Explorez comment ces espaces urbains en transition ont reflété les changements économiques et sociaux de la ville au fil du temps."
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
  </style>
  