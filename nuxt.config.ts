import { defineNuxtConfig } from "nuxt/config";
import fs from "fs";
import path from "path";

export default defineNuxtConfig({
    target: "static", // Générer un site statique
    modules: ["@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-lucide-icons"],
    css: ["./assets/main.css"],
    robots: {
        UserAgent: "*",
        Disallow: ["/admin", "/_nuxt"],
        Sitemap: "https://www.confus-terrain.com/sitemap.xml",
    },
    sitemap: {
        hostname: "https://www.confus-terrain.com",
        gzip: true,
        routes: async () => {
            const pagesDir = path.resolve(__dirname, "pages");
            const files = fs.readdirSync(pagesDir);

            const routes = files
                .filter((file) => file.endsWith(".vue"))
                .map((file) => {
                    const name = file.replace(".vue", "");
                    return name === "index" ? "/" : `/${name.toLowerCase()}`;
                });

            return routes;
        },
    },
    head: {
        htmlAttrs: {
            lang: "fr",
        },
        titleTemplate: "%s - NuxtApp",
        title: "nuxt-app",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Your description here" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
});
