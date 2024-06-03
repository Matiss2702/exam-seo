<template>
    <div class="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24 container">
        <Hero />
        <div>
            <HomeSection
                title="Notre Mission"
                text="Chez Éducation Écologique, notre mission est de sensibiliser le public aux enjeux écologiques et de promouvoir des pratiques durables pour préserver la biodiversité et les ressources naturelles."
                imageSrc="/sensibilisation.jpg"
                :reverse="false"
            />
            <HomeSection
                title="Pourquoi Préserver les Terrains Confus ?"
                text="Les terrains confus, souvent oubliés, jouent un rôle crucial dans le maintien de la biodiversité urbaine. Ils servent de refuge à de nombreuses espèces et contribuent à la résilience écologique des villes."
                imageSrc="/animal.png"
                :reverse="true"
            />
            <HomeSection
                title="Actions et Initiatives"
                text="Nous menons diverses initiatives pour la conservation des terrains confus, incluant des campagnes de
                plantation, des ateliers éducatifs et des collaborations avec des organisations locales et
                internationales."
                imageSrc="/actnow.jpg"
                :reverse="false"
            />
        </div>

        <div class="flex flex-col gap-y-6 sm:gap-y-10">
            <h2 class="title text-center">Obtenir plus d'informations</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 sm:gap-6">
                <HomeCard
                    title="Conservation des Sols pour Prévenir un Terrain Confus"
                    paragraph="Explorez l'importance de la conservation des sols pour éviter un terrain confus et préserver sa santé."
                    linkName="En savoir plus"
                    linkPath="/conservationdessols"
                />
                <HomeCard
                    title="Gestion de l'Eau pour un Terrain Confus Maintenir la Clarté et l'Équilibre"
                    paragraph="Découvrez des stratégies de gestion durable de l'eau pour prévenir un terrain confus et maintenir la clarté ainsi que l'équilibre de votre environnement."
                    linkName="En savoir plus"
                    linkPath="/gestiondeleau"
                />
                <HomeCard
                    title="Biodiversité pour un Terrain Confus Préserver la Clarté et la Richesse Naturelle"
                    paragraph="Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus."
                    linkName="En savoir plus"
                    linkPath="/biodiversite"
                />
                <HomeCard
                    title="Polémique Terrains Confus Paris"
                    paragraph="Les terrains confus à Paris sont au cœur d'une polémique intense. Découvrons les différents points de vue et les enjeux qui entourent ces espaces urbains en transition."
                    linkName="En savoir plus"
                    linkPath="/PolemiqueTerrainsConfusParis"
                />
                <HomeCard
                    title="Vente Terrain Confus"
                    paragraph="Découvrez comment et où acheter des terrains confus à Paris et dans d'autres régions, ainsi que les opportunités d'investissement qu'ils offrent."
                    linkName="En savoir plus"
                    linkPath="/VenteTerrainConfus"
                />
                <HomeCard
                    title="Terrains Confus de Paris"
                    paragraph="Apprenez tout sur les terrains confus de Paris, leur emplacement, leur importance et les défis associés à leur gestion."
                    linkName="En savoir plus"
                    linkPath="/TerrainsConfusDeParis"
                />
                <HomeCard
                    title="Histoire des Terrains Confus de Paris"
                    paragraph="Découvrez l'histoire fascinante des terrains confus de Paris, de leur origine à leur rôle actuel dans la ville."
                    linkName="En savoir plus"
                    linkPath="/HistoireTerrainsConfusDeParis"
                />
            </div>
        </div>

        <div class="flex flex-col gap-y-6 sm:gap-y-10">
            <h2 class="title">Nos sources</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-4 sm:gap-6">
                <HomeSourceCard title="WWF France" path="https://www.wwf.fr" imageSrc="/wwf.png" />
                <HomeSourceCard
                    title="Greenpeace France"
                    path="https://www.greenpeace.org/france"
                    imageSrc="/greenpeace.png"
                />
                <HomeSourceCard title="FAO" path="https://www.fao.org" imageSrc="/fao.png" />
            </div>
        </div>
    </div>
</template>

<script setup>
import HomeSourceCard from "../components/HomeSourceCard.vue";
useHead({
    title: "Terrain Confus - Découvrez les terrains confus à Paris et ailleurs",
    meta: [
        {
            hid: "description",
            name: "description",
            content:
                "Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions. Apprenez comment protéger notre environnement en adoptant des pratiques durables pour la conservation des sols, la gestion de l'eau et la préservation de la biodiversité.",
        },
        {
            hid: "keywords",
            name: "keywords",
            content:
                "terrain confus, terrains à Paris, achat terrain, terrains historiques, conservation des sols, gestion de l'eau, biodiversité, environnement",
        },
        {
            hid: "og:title",
            property: "og:title",
            content: "Terrain Confus - Découvrez les terrains confus à Paris et ailleurs",
        },
        {
            hid: "og:description",
            property: "og:description",
            content:
                "Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions. Apprenez comment protéger notre environnement en adoptant des pratiques durables pour la conservation des sols, la gestion de l'eau et la préservation de la biodiversité.",
        },
        {
            hid: "og:image",
            property: "og:image",
            content: "/favicon.ico",
        },
        {
            hid: "og:url",
            property: "og:url",
            content: "https://www.confus-terrain.com",
        },
        {
            hid: "twitter:card",
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            hid: "twitter:title",
            name: "twitter:title",
            content: "Terrain Confus - Découvrez les terrains confus à Paris et ailleurs",
        },
        {
            hid: "twitter:description",
            name: "twitter:description",
            content:
                "Trouvez toutes les informations sur les terrains confus, leur histoire et comment les acheter à Paris et dans d’autres régions. Apprenez comment protéger notre environnement en adoptant des pratiques durables pour la conservation des sols, la gestion de l'eau et la préservation de la biodiversité.",
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
