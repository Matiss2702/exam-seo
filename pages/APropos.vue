<template>
  <FooterPages
    title="A Propos de Éducation Écologique pour un Terrain Confus"
    firstParagraph="Découvrez notre mission chez Éducation Écologique, qui est de fournir des ressources éducatives pour aider à
            prévenir un terrain confus en sensibilisant aux enjeux écologiques liés à la conservation des sols, à la
            gestion de l'eau et à la biodiversité."
    secondParagraph="Nous nous engageons à fournir un contenu de sécurité pour aider nos visiteurs à comprendre l'importance de maintenir la clarté et l'équilibre de leur terrain et de contribuer ainsi à un environnement plus sain et durable."
    firstImageSrc="/aboutus.jpg"
    secondImageSrc="/studentressources.jpg"
    thirdImageSrc="/securitycontent.jpg"
  />
</template>

<script setup>
import FooterPages from "/components/FooterPages.vue";
useHead({
  title: "À Propos de Éducation Écologique pour un Terrain Confus",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Découvrez notre mission chez Éducation Écologique : fournir des ressources éducatives pour prévenir un terrain confus en sensibilisant aux enjeux écologiques liés à la conservation des sols, à la gestion de l'eau et à la biodiversité.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "terrain confus, éducation écologique, conservation des sols, gestion de l'eau, biodiversité, environnement durable",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "À Propos de Éducation Écologique pour un Terrain Confus",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Découvrez notre mission chez Éducation Écologique : fournir des ressources éducatives pour prévenir un terrain confus en sensibilisant aux enjeux écologiques liés à la conservation des sols, à la gestion de l'eau et à la biodiversité.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "/favicon.ico",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.confus-terrain.com/a-propos",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "À Propos de Éducation Écologique pour un Terrain Confus",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Découvrez notre mission chez Éducation Écologique : fournir des ressources éducatives pour prévenir un terrain confus en sensibilisant aux enjeux écologiques liés à la conservation des sols, à la gestion de l'eau et à la biodiversité.",
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
/* Styles spécifiques à la page */
</style>
