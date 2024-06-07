<template>
  <div class="flex flex-col gap-y-4">
    <FooterPages
      title="Contactez-nous pour un Terrain Clair et Non Confus"
      firstParagraph="N'hésitez pas à nous contacter si vous avez des questions, des commentaires ou des suggestions concernant
      Éducation Écologique pour un Terrain Confus. Nous sommes là pour vous aider à mieux comprendre les enjeux
      écologiques et à préserver la clarté de votre terrain."
      secondParagraph="Toujours perdu ? Le formulaire pour prendre contact avec nos services ce situe juste en dessous !"
      firstImageSrc="/contactus.webp"
      secondImageSrc="/questions.webp"
      thirdImageSrc="/down.webp"
      firstImageAlt="Contactez-nous"
      secondImageAlt="Réflexion"
      thirdImageAlt="Pointe en bas"
    />
    <!-- Ajoutez ici un formulaire de contact -->
  </div>
</template>

<script setup lang="ts">
import FooterPages from "/components/FooterPages.vue";
useHead({
  htmlAttrs: {
    lang: "fr",
  },
  title: "Contactez-nous pour un Terrain Clair et Non Confus",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "N'hésitez pas à nous contacter pour toute question concernant Éducation Écologique et les terrains confus. Nous sommes ici pour vous aider à préserver la clarté et l'équilibre de votre terrain.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "terrain confus, contact, Éducation Écologique, clarté, équilibre, questions écologiques",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Contactez-nous pour un Terrain Clair et Non Confus",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "N'hésitez pas à nous contacter pour toute question concernant Éducation Écologique et les terrains confus. Nous sommes ici pour vous aider à préserver la clarté et l'équilibre de votre terrain.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "/favicon.ico",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.confus-terrain.com/contact",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Contactez-nous pour un Terrain Clair et Non Confus",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "N'hésitez pas à nous contacter pour toute question concernant Éducation Écologique et les terrains confus. Nous sommes ici pour vous aider à préserver la clarté et l'équilibre de votre terrain.",
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
