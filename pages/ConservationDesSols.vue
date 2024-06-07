<template>
  <div class="flex flex-col gap-y-16">
    <PageHero
      title="Conservation des Sols pour Prévenir un Terrain Confus"
      paragraph="Découvrez l'importance cruciale de la conservation des sols pour prévenir l'érosion et maintenir la clarté de
      votre terrain."
      imageSrc="/conservation.webp"
      imageAlt="Image de plantation de plantes"
    />
    <div class="flex flex-col gap-y-10">
      <h3 class="text-center title">Quelques pratiques recommandées</h3>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PageCard
          title="Utilisation de techniques de culture sans labour pour éviter de perturber la structure du terrain."
          imageSrc="/labourless.webp"
          imageAlt="Image d'un homme montrant un fruit"
        />
        <PageCard
          title="Plantation d'arbres pour prévenir l'érosion et maintenir la stabilité du terrain."
          imageSrc="/plantation2.webp"
          imageAlt="Image de plantation d'arbres"
        />
        <PageCard
          title="Maintien d'une couverture végétale permanente pour protéger la surface du terrain et éviter sa confusion."
          imageSrc="/greencover.webp"
          imageAlt="Image montrant beaucoup de plantation"
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
  title: "Conservation des Sols pour Prévenir un Terrain Confus",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Découvrez l'importance de la conservation des sols pour prévenir l'érosion et maintenir la clarté de votre terrain confus. Apprenez les meilleures pratiques pour protéger et stabiliser votre terrain.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "terrain confus, conservation des sols, prévention de l'érosion, stabilité du terrain, pratiques durables",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Conservation des Sols pour Prévenir un Terrain Confus",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Découvrez l'importance de la conservation des sols pour prévenir l'érosion et maintenir la clarté de votre terrain confus. Apprenez les meilleures pratiques pour protéger et stabiliser votre terrain.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "/favicon.ico",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.confus-terrain.com/conservation-sols-terrain-confus",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Conservation des Sols pour Prévenir un Terrain Confus",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Découvrez l'importance de la conservation des sols pour prévenir l'érosion et maintenir la clarté de votre terrain confus. Apprenez les meilleures pratiques pour protéger et stabiliser votre terrain.",
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
