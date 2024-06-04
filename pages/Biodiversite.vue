<template>
  <div class="flex flex-col gap-y-16">
    <PageHero
      title="Biodiversité pour un Terrain Confus : Préserver la Clarté et la Richesse Naturelle"
      paragraph="Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus."
      imageSrc="/biodiversity.jpg"
    />
    <div class="flex flex-col gap-y-10">
      <h3 class="text-center title">Quelques actions pour protéger la biodiversité</h3>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PageCard
          title="Protection des habitats naturels présents sur le terrain pour maintenir la clarté de l'environnement."
          imageSrc="/natural.jpg"
        />
        <PageCard
          title="Encouragement de la plantation d'espèces indigènes pour favoriser la biodiversité et prévenir la confusion
        écologique sur le terrain."
          imageSrc="/plantation3.jpg"
        />
        <PageCard
          title="Sensibilisation à l'impact des espèces invasives sur la santé et la clarté du terrain."
          imageSrc="/invasivespecies.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from "/components/PageHero.vue";
import PageCard from "/components/PageCard.vue";
useHead({
  title: "Biodiversité pour un Terrain Confus : Préserver la Clarté et la Richesse Naturelle",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus. Découvrez des actions pour protéger la biodiversité et prévenir la confusion écologique sur votre terrain.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "terrain confus, biodiversité, préservation, espèces indigènes, habitats naturels, équilibre écologique",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Biodiversité pour un Terrain Confus : Préserver la Clarté et la Richesse Naturelle",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus. Découvrez des actions pour protéger la biodiversité et prévenir la confusion écologique sur votre terrain.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "/favicon.ico",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.confus-terrain.com/biodiversite-terrain-confus",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Biodiversité pour un Terrain Confus : Préserver la Clarté et la Richesse Naturelle",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus. Découvrez des actions pour protéger la biodiversité et prévenir la confusion écologique sur votre terrain.",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "/favicon.ico",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style scoped>
.page {
  padding: 20px;
}
</style>
