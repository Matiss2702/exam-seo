<template>
  <div class="flex flex-col gap-y-16">
    <ConservationHero
      title="Conservation des Sols pour Prévenir un Terrain Confus"
      paragraph="Découvrez l'importance cruciale de la conservation des sols pour prévenir l'érosion et maintenir la clarté de
      votre terrain."
      imageSrc="/conservation.jpg"
    />
    <div class="flex flex-col gap-y-10">
      <h3 class="title text-center">Quelques pratiques recommandées</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ConservationCard
          title="Utilisation de techniques de culture sans labour pour éviter de perturber la structure du terrain."
          imageSrc="/labourless.jpg"
        />
        <ConservationCard
          title="Plantation d'arbres pour prévenir l'érosion et maintenir la stabilité du terrain."
          imageSrc="/plantation2.jpg"
        />
        <ConservationCard
          title="Maintien d'une couverture végétale permanente pour protéger la surface du terrain et éviter sa confusion."
          imageSrc="/greencover.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ConservationHero from "/components/ConservationPage/ConservationHero.vue";
import ConservationCard from "/components/ConservationPage/ConservationCard.vue";
useHead({
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
