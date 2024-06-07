<template>
  <div class="flex flex-col gap-y-16">
    <PageHero
      title="Gestion de l'Eau pour un Terrain Confus : Maintenir la Clarté et l'Équilibre"
      paragraph="Découvrez des méthodes de gestion durable de l'eau pour prévenir un terrain confus et maintenir la clarté ainsi
      que l'équilibre de votre environnement."
      imageSrc="/clearwater.webp"
      imageAlt="Image montrant de l'eau claire"
    />
    <div class="flex flex-col gap-y-10">
      <h3 class="text-center title">Quelques stratégies pour la gestion de l'eau</h3>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PageCard
          title="Collecte et stockage des eaux de pluie pour une utilisation efficace et rationnelle, préservant ainsi la clarté
        du terrain."
          imageSrc="/watercollect.webp"
          imageAlt="Image montrant une personne récolter de l'eau"
        />
        <PageCard
          title="Récupération des eaux usées pour un usage non potable, contribuant ainsi à maintenir l'eau du terrain claire et
        saine."
          imageSrc="/wastewater.webp"
          imageAlt="Image montrant des eaux usées"
        />
        <PageCard
          title="Utilisation de techniques d'irrigation efficaces pour minimiser le gaspillage d'eau et maintenir la clarté du
        terrain."
          imageSrc="/waterirrigation.webp"
          imageAlt="Image montrant une irrigation"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHero from "/components/PageHero.vue";
import PageCard from "/components/PageCard.vue";
useHead({
  htmlAttrs: {
    lang: "fr",
  },
  title: "Gestion de l'Eau pour un Terrain Confus : Maintenir la Clarté et l'Équilibre",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Découvrez des méthodes de gestion durable de l'eau pour un terrain confus. Apprenez comment maintenir la clarté et l'équilibre de votre environnement grâce à des stratégies efficaces de gestion de l'eau.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "terrain confus, gestion de l'eau, durabilité, clarté, équilibre, environnement",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Gestion de l'Eau pour un Terrain Confus : Maintenir la Clarté et l'Équilibre",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Découvrez des méthodes de gestion durable de l'eau pour un terrain confus. Apprenez comment maintenir la clarté et l'équilibre de votre environnement grâce à des stratégies efficaces de gestion de l'eau.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "/favicon.ico",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.confus-terrain.com/gestion-eau-terrain-confus",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Gestion de l'Eau pour un Terrain Confus : Maintenir la Clarté et l'Équilibre",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Découvrez des méthodes de gestion durable de l'eau pour un terrain confus. Apprenez comment maintenir la clarté et l'équilibre de votre environnement grâce à des stratégies efficaces de gestion de l'eau.",
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
