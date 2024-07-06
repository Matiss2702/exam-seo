import { Metadata } from "next";

// ==========================================================================================================

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Terrains Confus de Paris",
  url: "https://confus-terrain.com/",
  description:
    "Découvrez le projet Terrains Confus de Paris, explorant la biodiversité, la conservation des sols, la gestion de l'eau et plus encore.",
  primaryImageOfPage: {
    "@type": "ImageObject",
    "@id": "https://confus-terrain.com/img/websiteimg.png",
    url: "https://confus-terrain.com/img/websiteimg.png",
    width: 1280,
    height: 720,
  },
  author: {
    "@type": "Organization",
    name: "Terrains Confus de Paris Team",
    url: "https://confus-terrain.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Terrains Confus de Paris",
    logo: {
      "@type": "ImageObject",
      url: "https://confus-terrain.com/icons/logo.png",
      width: 60,
      height: 60,
    },
  },
  mainEntityOfPage: [
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/",
      name: "Accueil",
      description:
        "Bienvenue sur Terrains Confus de Paris, un projet dédié à l'exploration de la biodiversité, la conservation des sols, et la gestion de l'eau à Paris.",
      url: "https://confus-terrain.com/",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/apropos",
      name: "À Propos",
      description:
        "En savoir plus sur le projet Terrains Confus de Paris, ses objectifs et son équipe.",
      url: "https://confus-terrain.com/apropos",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/biodiversite",
      name: "Biodiversité",
      description:
        "Découvrez la biodiversité unique des Terrains Confus de Paris.",
      url: "https://confus-terrain.com/biodiversite",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/conservationdessols",
      name: "Conservation des Sols",
      description:
        "Apprenez-en plus sur les pratiques de conservation des sols sur les Terrains Confus de Paris.",
      url: "https://confus-terrain.com/conservationdessols",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/contact",
      name: "Contact",
      description:
        "Contactez-nous pour plus d'informations sur le projet Terrains Confus de Paris.",
      url: "https://confus-terrain.com/contact",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/gestiondeleau",
      name: "Gestion de l'Eau",
      description:
        "Découvrez comment les Terrains Confus de Paris gèrent les ressources en eau.",
      url: "https://confus-terrain.com/gestiondeleau",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/histoire",
      name: "Histoire",
      description: "Découvrez l'histoire des Terrains Confus de Paris.",
      url: "https://confus-terrain.com/histoire",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/polemique",
      name: "Polémique",
      description:
        "Explorez les controverses et débats autour des Terrains Confus de Paris.",
      url: "https://confus-terrain.com/polemique",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/les-terrains-confus-de-paris",
      name: "Les Terrains Confus de Paris",
      description:
        "Découvrez les Terrains Confus de Paris, des espaces urbains en transition offrant une perspective unique sur la dynamique urbaine.",
      url: "https://confus-terrain.com/les-terrains-confus-de-paris",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/politique-de-confidentialite",
      name: "Politique de Confidentialité",
      description:
        "Consultez notre politique de confidentialité concernant les Terrains Confus de Paris.",
      url: "https://confus-terrain.com/politique-de-confidentialite",
    },
    {
      "@type": "WebPage",
      "@id": "https://confus-terrain.com/vente",
      name: "Vente",
      description:
        "Découvrez les opportunités de vente sur les Terrains Confus de Paris.",
      url: "https://confus-terrain.com/vente",
    },
  ],
};

// ==========================================================================================================

export const commonMetadata: Metadata = {
  applicationName: "Terrains Confus",
  metadataBase: new URL("https://confus-terrain.com/"),
  title: {
    template: "%s - Terrains Confus",
    default: "Terrains Confus",
  },
  alternates: {
    canonical: "https://confus-terrain.com/",
  },
  authors: [
    { name: "Bryan Cellier", url: "https://bryancellier.fr/" },
    { name: "Matiss Haillouy", url: "https://github.com/Matiss2702" },
  ],
  openGraph: {
    title: "Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Terrains Confus",
      },
    ],
    description:
      "Découvrez le projet Terrains Confus de Paris, explorant la biodiversité, la conservation des sols, la gestion de l'eau et plus encore.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrains Confus",
    description:
      "Découvrez le projet Terrains Confus de Paris, explorant la biodiversité, la conservation des sols, la gestion de l'eau et plus encore.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const homeMetadata: Metadata = {
  description:
    "Bienvenue sur Terrains Confus de Paris, un projet dédié à l'exploration de la biodiversité, la conservation des sols, et la gestion de l'eau à Paris.",
  keywords:
    "Terrains Confus de Paris, biodiversité, conservation des sols, gestion de l'eau, Paris, environnement",
  openGraph: {
    title: "Accueil - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Accueil Terrains Confus",
      },
    ],
    description:
      "Bienvenue sur Terrains Confus de Paris, un projet dédié à l'exploration de la biodiversité, la conservation des sols, et la gestion de l'eau à Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accueil - Terrains Confus",
    description:
      "Bienvenue sur Terrains Confus de Paris, un projet dédié à l'exploration de la biodiversité, la conservation des sols, et la gestion de l'eau à Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Accueil Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const aboutMetadata: Metadata = {
  title: "À Propos",
  description:
    "En savoir plus sur le projet Terrains Confus de Paris, ses objectifs et son équipe.",
  keywords:
    "Terrains Confus de Paris, à propos, objectifs, équipe, environnement",
  openGraph: {
    title: "À Propos - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/apropos",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "À Propos Terrains Confus",
      },
    ],
    description:
      "En savoir plus sur le projet Terrains Confus de Paris, ses objectifs et son équipe.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos - Terrains Confus",
    description:
      "En savoir plus sur le projet Terrains Confus de Paris, ses objectifs et son équipe.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "À Propos Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const biodiversityMetadata: Metadata = {
  title: "Biodiversité",
  description: "Découvrez la biodiversité unique des Terrains Confus de Paris.",
  keywords:
    "Terrains Confus de Paris, biodiversité, faune, flore, environnement",
  openGraph: {
    title: "Biodiversité - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/biodiversite",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Biodiversité Terrains Confus",
      },
    ],
    description:
      "Découvrez la biodiversité unique des Terrains Confus de Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biodiversité - Terrains Confus",
    description:
      "Découvrez la biodiversité unique des Terrains Confus de Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Biodiversité Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const conservationMetadata: Metadata = {
  title: "Conservation des Sols",
  description:
    "Apprenez-en plus sur les pratiques de conservation des sols sur les Terrains Confus de Paris.",
  keywords:
    "Terrains Confus de Paris, conservation des sols, pratiques environnementales, sol",
  openGraph: {
    title: "Conservation des Sols - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/conservationdessols",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Conservation des Sols Terrains Confus",
      },
    ],
    description:
      "Apprenez-en plus sur les pratiques de conservation des sols sur les Terrains Confus de Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conservation des Sols - Terrains Confus",
    description:
      "Apprenez-en plus sur les pratiques de conservation des sols sur les Terrains Confus de Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Conservation des Sols Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const contactMetadata: Metadata = {
  title: "Contact",
  description:
    "Contactez-nous pour plus d'informations sur le projet Terrains Confus de Paris.",
  keywords: "Terrains Confus de Paris, contact, informations, environnement",
  openGraph: {
    title: "Contact - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/contact",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Contact Terrains Confus",
      },
    ],
    description:
      "Contactez-nous pour plus d'informations sur le projet Terrains Confus de Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Terrains Confus",
    description:
      "Contactez-nous pour plus d'informations sur le projet Terrains Confus de Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Contact Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const gestionMetadata: Metadata = {
  title: "Gestion de l'Eau",
  description:
    "Découvrez comment les Terrains Confus de Paris gèrent les ressources en eau.",
  keywords:
    "Terrains Confus de Paris, gestion de l'eau, ressources en eau, environnement",
  openGraph: {
    title: "Gestion de l'Eau - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/gestiondeleau",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Gestion de l'Eau Terrains Confus",
      },
    ],
    description:
      "Découvrez comment les Terrains Confus de Paris gèrent les ressources en eau.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion de l'Eau - Terrains Confus",
    description:
      "Découvrez comment les Terrains Confus de Paris gèrent les ressources en eau.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Gestion de l'Eau Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const historyMetadata: Metadata = {
  title: "Histoire",
  description: "Découvrez l'histoire des Terrains Confus de Paris.",
  keywords: "Terrains Confus de Paris, histoire, patrimoine, environnement",
  openGraph: {
    title: "Histoire - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/histoire",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Histoire Terrains Confus",
      },
    ],
    description: "Découvrez l'histoire des Terrains Confus de Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Histoire - Terrains Confus",
    description: "Découvrez l'histoire des Terrains Confus de Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Histoire Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const polemicMetadata: Metadata = {
  title: "Polémique",
  description:
    "Explorez les controverses et débats autour des Terrains Confus de Paris.",
  keywords:
    "Terrains Confus de Paris, polémique, controverses, débats, environnement",
  openGraph: {
    title: "Polémique - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/polemique",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Polémique Terrains Confus",
      },
    ],
    description:
      "Explorez les controverses et débats autour des Terrains Confus de Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polémique - Terrains Confus",
    description:
      "Explorez les controverses et débats autour des Terrains Confus de Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Polémique Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const parisMetadata: Metadata = {
  title: "Les Terrains Confus de Paris",
  description:
    "Découvrez les Terrains Confus de Paris, des espaces urbains en transition offrant une perspective unique sur la dynamique urbaine.",
  keywords:
    "Terrains Confus de Paris, dynamique urbaine, friches industrielles, réaménagement, biodiversité urbaine",
  openGraph: {
    title: "Les Terrains Confus de Paris - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/les-terrains-confus-de-paris",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Les Terrains Confus de Paris",
      },
    ],
    description:
      "Découvrez les Terrains Confus de Paris, des espaces urbains en transition offrant une perspective unique sur la dynamique urbaine.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Terrains Confus de Paris - Terrains Confus",
    description:
      "Découvrez les Terrains Confus de Paris, des espaces urbains en transition offrant une perspective unique sur la dynamique urbaine.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Les Terrains Confus de Paris",
    },
  },
};

// ==========================================================================================================

export const confidentialityMetadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Consultez notre politique de confidentialité concernant les Terrains Confus de Paris.",
  keywords:
    "Terrains Confus de Paris, politique de confidentialité, données personnelles, environnement",
  openGraph: {
    title: "Politique de Confidentialité - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/politique-de-confidentialite",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Politique de Confidentialité Terrains Confus",
      },
    ],
    description:
      "Consultez notre politique de confidentialité concernant les Terrains Confus de Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité - Terrains Confus",
    description:
      "Consultez notre politique de confidentialité concernant les Terrains Confus de Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Politique de Confidentialité Terrains Confus",
    },
  },
};

// ==========================================================================================================

export const sellMetadata: Metadata = {
  title: "Vente",
  description:
    "Découvrez les opportunités de vente sur les Terrains Confus de Paris.",
  keywords: "Terrains Confus de Paris, vente, opportunités, environnement",
  openGraph: {
    title: "Vente - Terrains Confus",
    type: "website",
    url: "https://confus-terrain.com/vente",
    images: [
      {
        url: "https://confus-terrain.com/img/websiteimg.png",
        width: "1200",
        height: "630",
        alt: "Vente Terrains Confus",
      },
    ],
    description:
      "Découvrez les opportunités de vente sur les Terrains Confus de Paris.",
    siteName: "Terrains Confus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vente - Terrains Confus",
    description:
      "Découvrez les opportunités de vente sur les Terrains Confus de Paris.",
    images: {
      width: "1200",
      height: "630",
      url: "https://confus-terrain.com/img/websiteimg.png",
      alt: "Vente Terrains Confus",
    },
  },
};

// ==========================================================================================================
