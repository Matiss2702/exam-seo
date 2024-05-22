<template>
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
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const title = ref("La Polémique des Terrains Confus à Paris : Débats et Enjeux");
  const introduction = ref("Les terrains confus à Paris sont au cœur d'une polémique intense. Découvrons les différents points de vue et les enjeux qui entourent ces espaces urbains en transition.");
  const sections = ref([
    {
      id: 1,
      heading: "Qu'est-ce qu'un Terrain Confus ?",
      content: "Les terrains confus sont des espaces urbains abandonnés ou sous-utilisés. À Paris, ces terrains sont souvent le résultat de la désindustrialisation ou du déplacement des infrastructures ferroviaires. Ces espaces sont aujourd'hui au centre de nombreux débats.",
      image: { src: '/terrain confus.jpg', alt: "Exemple de terrain confus à Paris" }
    },
    {
      id: 2,
      heading: "Les Partisans de la Réhabilitation",
      content: "Certains voient dans les terrains confus une opportunité unique de réaménagement urbain. Ils préconisent la transformation de ces espaces en parcs, en jardins communautaires, ou en centres culturels, apportant ainsi de la valeur ajoutée à la ville.",
      image: { src: '/terrainconfuss.jpg', alt: "Réhabilitation des terrains confus" }
    },
    {
      id: 3,
      heading: "Les Opposants à la Réhabilitation",
      content: "D'autres sont contre la réhabilitation des terrains confus, arguant que ces espaces doivent rester intacts pour préserver la biodiversité urbaine et offrir des refuges pour la faune et la flore locales. Ils craignent que la transformation de ces espaces ne nuise à l'écosystème existant.",
      image: { src: '/terrconf.jpg', alt: "Opposition à la réhabilitation des terrains confus" }
    },
    {
      id: 4,
      heading: "Les Enjeux Économiques et Sociaux",
      content: "La réhabilitation des terrains confus soulève également des questions économiques et sociales. Les projets de développement peuvent entraîner une hausse des prix de l'immobilier et provoquer la gentrification de certains quartiers, excluant ainsi les habitants les plus modestes.",
      image: { src: '/terrainconfus.jpg', alt: "Enjeux économiques et sociaux des terrains confus" }
    }
  ]);
  const conclusion = ref("La polémique autour des terrains confus à Paris est complexe et multifacette. Entre conservation de la biodiversité et réhabilitation urbaine, les décisions prises aujourd'hui façonneront le visage de Paris pour les années à venir.");
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
  </style>
  