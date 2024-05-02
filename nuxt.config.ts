// // https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    './assets/main.css'
  ],
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://terrain-confus.website',
    gzip: true,
  }
})