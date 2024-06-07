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

<script setup lang="ts">
import { ref } from "vue";

const title = ref("La Polémique des Terrains Confus à Paris : Débats et Enjeux");
const introduction = ref(
  "Les terrains confus à Paris sont au cœur d'une polémique intense. Découvrons les différents points de vue et les enjeux qui entourent ces espaces urbains en transition."
);
const sections = ref([
  {
    id: 1,
    heading: "Qu'est-ce qu'un Terrain Confus ?",
    content:
      "Les terrains confus sont des espaces urbains abandonnés ou sous-utilisés. À Paris, ces terrains sont souvent le résultat de la désindustrialisation ou du déplacement des infrastructures ferroviaires. Ces espaces sont aujourd'hui au centre de nombreux débats.",
    image: { src: "/terrain confus.webp", alt: "Exemple de terrain confus à Paris" },
  },
  {
    id: 2,
    heading: "Les Partisans de la Réhabilitation",
    content:
      "Certains voient dans les terrains confus une opportunité unique de réaménagement urbain. Ils préconisent la transformation de ces espaces en parcs, en jardins communautaires, ou en centres culturels, apportant ainsi de la valeur ajoutée à la ville.",
    image: { src: "/terrconfuss.webp", alt: "Réhabilitation des terrains confus" },
  },
  {
    id: 3,
    heading: "Les Opposants à la Réhabilitation",
    content:
      "D'autres sont contre la réhabilitation des terrains confus, arguant que ces espaces doivent rester intacts pour préserver la biodiversité urbaine et offrir des refuges pour la faune et la flore locales. Ils craignent que la transformation de ces espaces ne nuise à l'écosystème existant.",
    image: { src: "/terrconf.webp", alt: "Opposition à la réhabilitation des terrains confus" },
  },
  {
    id: 4,
    heading: "Les Enjeux Économiques et Sociaux",
    content:
      "La réhabilitation des terrains confus soulève également des questions économiques et sociales. Les projets de développement peuvent entraîner une hausse des prix de l'immobilier et provoquer la gentrification de certains quartiers, excluant ainsi les habitants les plus modestes.",
    image: { src: "/terrainconfus.webp", alt: "Enjeux économiques et sociaux des terrains confus" },
  },
]);
const conclusion = ref(
  "La polémique autour des terrains confus à Paris est complexe et multifacette. Entre conservation de la biodiversité et réhabilitation urbaine, les décisions prises aujourd'hui façonneront le visage de Paris pour les années à venir."
);

useHead({
  htmlAttrs: {
    lang: "fr",
  },
  title: "La Polémique des Terrains Confus à Paris : Débats et Enjeux",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Découvrez les débats et enjeux autour des terrains confus à Paris. Explorez les points de vue sur la réhabilitation et la conservation de ces espaces urbains uniques.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "terrain confus, Paris, débats, enjeux, réhabilitation, biodiversité, développement urbain",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "La Polémique des Terrains Confus à Paris : Débats et Enjeux",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Découvrez les débats et enjeux autour des terrains confus à Paris. Explorez les points de vue sur la réhabilitation et la conservation de ces espaces urbains uniques.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "/terrain confus.webp",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.confus-terrain.com/polemique-terrain-confus",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "La Polémique des Terrains Confus à Paris : Débats et Enjeux",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Découvrez les débats et enjeux autour des terrains confus à Paris. Explorez les points de vue sur la réhabilitation et la conservation de ces espaces urbains uniques.",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "/terrain confus.webp",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
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
