import {
  FooterDataProps,
  FooterPagesDataProps,
  HomeCardDataProps,
  HomeHeroDataProps,
  HomeSectionDataProps,
  HomeSourceCardDataProps,
  NavbarDataProps,
  PageData2Props,
  PageDataProps,
} from "./type";

// ===========================================================================

export const navbarLinks: NavbarDataProps[] = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/conservation",
    label: "Conservation",
  },
  {
    href: "/gestion",
    label: "Gestion",
  },
  {
    href: "/biodiversite",
    label: "Biodiversité",
  },
  {
    href: "/",
    label: "Logo",
    isLogo: true,
  },
  {
    href: "/paris",
    label: "Paris",
  },
  {
    href: "/histoire",
    label: "Histoire",
  },
  {
    href: "/polemique",
    label: "Polémique",
  },
  {
    href: "/vente",
    label: "Vente",
  },
];

// ===========================================================================

export const footerLinks: FooterDataProps[] = [
  {
    href: "/a-propos",
    label: "À propos",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/confidentialite",
    label: "Politique de confidentialité",
  },
];

// ===========================================================================

export const homeHeroData: HomeHeroDataProps = {
  title: "Éducation Écologique pour un Terrain Confus",
  subtitle:
    "Découvrez comment protéger notre environnement en apprenant les bonnes pratiques pour la conservation des sols, la gestion de l'eau et la préservation de la biodiversité.",
  imageSrc: "/img/plantation.webp",
  imageAlt: "Image de présentation",
};

// ===========================================================================

export const homeSectionData: HomeSectionDataProps[] = [
  {
    title: "Notre Mission",
    text: "Chez Éducation Écologique, notre mission est de sensibiliser le public aux enjeux écologiques et de promouvoir des pratiques durables pour préserver la biodiversité et les ressources naturelles.",
    imageSrc: "/img/sensibilisation.webp",
    imageAlt: "Image d'une personne sensibilisée",
    reverse: false,
  },
  {
    title: "Pourquoi Préserver les Terrains Confus ?",
    text: "Les terrains confus, souvent oubliés, jouent un rôle crucial dans le maintien de la biodiversité urbaine. Ils servent de refuge à de nombreuses espèces et contribuent à la résilience écologique des villes.",
    imageSrc: "/img/animal.webp",
    imageAlt: "Image d'un lapin",
    reverse: true,
  },
  {
    title: "Actions et Initiatives",
    text: "Nous menons diverses initiatives pour la conservation des terrains confus, incluant des campagnes de plantation, des ateliers éducatifs et des collaborations avec des organisations locales et internationales.",
    imageSrc: "/img/actnow.webp",
    imageAlt: "Image d'actions",
    reverse: false,
  },
];

// ===========================================================================

export const homeCardData: HomeCardDataProps[] = [
  {
    title: "Conservation des Sols pour Prévenir un Terrain Confus",
    paragraph:
      "Explorez l'importance de la conservation des sols pour éviter un terrain confus et préserver sa santé.",
    linkName: "En savoir plus",
    linkPath: "/conservation",
  },
  {
    title:
      "Gestion de l'Eau pour un Terrain Confus Maintenir la Clarté et l'Équilibre",
    paragraph:
      "Découvrez des stratégies de gestion durable de l'eau pour prévenir un terrain confus et maintenir la clarté ainsi que l'équilibre de votre environnement.",
    linkName: "En savoir plus",
    linkPath: "/gestion",
  },
  {
    title:
      "Biodiversité pour un Terrain Confus Préserver la Clarté et la Richesse Naturelle",
    paragraph:
      "Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus.",
    linkName: "En savoir plus",
    linkPath: "/biodiversite",
  },
  {
    title: "Polémique Terrains Confus Paris",
    paragraph:
      "Les terrains confus à Paris sont au cœur d'une polémique intense. Découvrons les différents points de vue et les enjeux qui entourent ces espaces urbains en transition.",
    linkName: "En savoir plus",
    linkPath: "/polemique",
  },
  {
    title: "Vente Terrain Confus",
    paragraph:
      "Découvrez comment et où acheter des terrains confus à Paris et dans d'autres régions, ainsi que les opportunités d'investissement qu'ils offrent.",
    linkName: "En savoir plus",
    linkPath: "/vente",
  },
  {
    title: "Terrains Confus de Paris",
    paragraph:
      "Apprenez tout sur les terrains confus de Paris, leur emplacement, leur importance et les défis associés à leur gestion.",
    linkName: "En savoir plus",
    linkPath: "/paris",
  },
  {
    title: "Histoire des Terrains Confus de Paris",
    paragraph:
      "Découvrez l'histoire fascinante des terrains confus de Paris, de leur origine à leur rôle actuel dans la ville.",
    linkName: "En savoir plus",
    linkPath: "/histoire",
  },
];

// ===========================================================================

export const homeSourceCardData: HomeSourceCardDataProps[] = [
  {
    title: "WWF France",
    path: "https://www.wwf.fr",
    imageSrc: "/img/wwf.webp",
    imageAlt: "Image du site WWF France",
  },
  {
    title: "Greenpeace France",
    path: "https://www.greenpeace.org/france",
    imageSrc: "/img/greenpeace.webp",
    imageAlt: "Image du site Greenpeace",
  },
  {
    title: "FAO",
    path: "https://www.fao.org",
    imageSrc: "/img/fao.webp",
    imageAlt: "Image du site FAO",
  },
];

// ===========================================================================

export const biodiversityPageData: PageDataProps = {
  hero: {
    title:
      "Biodiversité pour un Terrain Confus : Préserver la Clarté et la Richesse Naturelle",
    paragraph:
      "Explorez la richesse de la biodiversité pour maintenir la clarté et l'équilibre de votre terrain confus.",
    imageSrc: "/img/biodiversity.webp",
    imageAlt: "Image d'un lézard",
  },
  title: "Quelques actions pour protéger la biodiversité",
  cards: [
    {
      title:
        "Protection des habitats naturels présents sur le terrain pour maintenir la clarté de l'environnement.",
      imageSrc: "/img/natural.webp",
      imageAlt: "Image montrant des habitats naturels",
    },
    {
      title:
        "Encouragement de la plantation d'espèces indigènes pour favoriser la biodiversité et prévenir la confusion écologique sur le terrain.",
      imageSrc: "/img/plantation3.webp",
      imageAlt: "Image montrant des plantations",
    },
    {
      title:
        "Sensibilisation à l'impact des espèces invasives sur la santé et la clarté du terrain.",
      imageSrc: "/img/invasivespecies.webp",
      imageAlt: "Image montrant une espèce invasive",
    },
  ],
};

// ===========================================================================

export const aboutPageData: FooterPagesDataProps = {
  title: "A Propos de Éducation Écologique pour un Terrain Confus",
  firstParagraph:
    "Découvrez notre mission chez Éducation Écologique, qui est de fournir des ressources éducatives pour aider à prévenir un terrain confus en sensibilisant aux enjeux écologiques liés à la conservation des sols, à la gestion de l'eau et à la biodiversité.",
  secondParagraph:
    "Nous nous engageons à fournir un contenu de sécurité pour aider nos visiteurs à comprendre l'importance de maintenir la clarté et l'équilibre de leur terrain et de contribuer ainsi à un environnement plus sain et durable.",
  firstImageSrc: "/img/aboutus.webp",
  firstImageAlt: "A propos de nous",
  secondImageSrc: "/img/studentressources.webp",
  secondImageAlt: "Education ecologique",
  thirdImageSrc: "/img/securitycontent.webp",
  thirdImageAlt: "Sécurité",
};

// ===========================================================================

export const confidentialityPageData: FooterPagesDataProps = {
  title:
    "Politique de Confidentialité de Éducation Écologique pour un Terrain Confus",
  firstParagraph:
    "Chez Éducation Écologique, nous attachons une grande importance à la protection de votre vie privée et à la sécurité de vos données personnelles. Notre politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations.",
  secondParagraph:
    "Nous nous engageons à ne jamais partager vos données personnelles avec des tiers sans votre consentement explicite. De plus, nous utilisons des mesures de sécurité avancées pour protéger vos informations contre tout accès non autorisé ou utilisation abusive. Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, n'hésitez pas à nous contacter.",
  firstImageSrc: "/img/confidentiality.webp",
  firstImageAlt: "Confidentialité",
  secondImageSrc: "/img/personnaldata.webp",
  secondImageAlt: "Données personnelles",
  thirdImageSrc: "/img/donotshare.webp",
  thirdImageAlt: "Personne qui refuse",
};

// ===========================================================================

export const conservationPageData: PageDataProps = {
  hero: {
    title: "Conservation des Sols pour Prévenir un Terrain Confus",
    paragraph:
      "Découvrez l'importance cruciale de la conservation des sols pour prévenir l'érosion et maintenir la clarté de votre terrain.",
    imageSrc: "/img/conservation.webp",
    imageAlt: "Image de plantation de plantes",
  },
  title: "Quelques pratiques recommandées",
  cards: [
    {
      title:
        "Utilisation de techniques de culture sans labour pour éviter de perturber la structure du terrain.",
      imageSrc: "/img/labourless.webp",
      imageAlt: "Image d'un homme montrant un fruit",
    },
    {
      title:
        "Plantation d'arbres pour prévenir l'érosion et maintenir la stabilité du terrain.",
      imageSrc: "/img/plantation2.webp",
      imageAlt: "Image de plantation d'arbres",
    },
    {
      title:
        "Maintien d'une couverture végétale permanente pour protéger la surface du terrain et éviter sa confusion.",
      imageSrc: "/img/greencover.webp",
      imageAlt: "Image montrant beaucoup de plantation",
    },
  ],
};

// ===========================================================================

export const contactPageData: FooterPagesDataProps = {
  title: "Contactez-nous pour un Terrain Clair et Non Confus",
  firstParagraph:
    "N'hésitez pas à nous contacter si vous avez des questions, des commentaires ou des suggestions concernant Éducation Écologique pour un Terrain Confus. Nous sommes là pour vous aider à mieux comprendre les enjeux écologiques et à préserver la clarté de votre terrain.",
  secondParagraph:
    "Toujours perdu ? Le formulaire pour prendre contact avec nos services se situe juste en dessous !",
  firstImageSrc: "/img/contactus.webp",
  firstImageAlt: "Contactez-nous",
  secondImageSrc: "/img/questions.webp",
  secondImageAlt: "Réflexion",
  thirdImageSrc: "/img/down.webp",
  thirdImageAlt: "Pointe en bas",
};

// ===========================================================================

export const gestionPageData: PageDataProps = {
  hero: {
    title:
      "Gestion de l'Eau pour un Terrain Confus : Maintenir la Clarté et l'Équilibre",
    paragraph:
      "Découvrez des méthodes de gestion durable de l'eau pour prévenir un terrain confus et maintenir la clarté ainsi que l'équilibre de votre environnement.",
    imageSrc: "/img/clearwater.webp",
    imageAlt: "Image montrant de l'eau claire",
  },
  title: "Quelques stratégies pour la gestion de l'eau",
  cards: [
    {
      title:
        "Collecte et stockage des eaux de pluie pour une utilisation efficace et rationnelle, préservant ainsi la clarté du terrain.",
      imageSrc: "/img/watercollect.webp",
      imageAlt: "Image montrant une personne récolter de l'eau",
    },
    {
      title:
        "Récupération des eaux usées pour un usage non potable, contribuant ainsi à maintenir l'eau du terrain claire et saine.",
      imageSrc: "/img/wastewater.webp",
      imageAlt: "Image montrant des eaux usées",
    },
    {
      title:
        "Utilisation de techniques d'irrigation efficaces pour minimiser le gaspillage d'eau et maintenir la clarté du terrain.",
      imageSrc: "/img/waterirrigation.webp",
      imageAlt: "Image montrant une irrigation",
    },
  ],
};

// ===========================================================================

export const parisPageData: PageData2Props = {
  title: "Les Terrains Confus de Paris : Une Exploration Urbaine",
  introduction:
    "Paris est célèbre pour ses monuments emblématiques, mais la ville cache aussi des 'terrains confus', des espaces urbains en transition qui offrent une perspective unique sur la dynamique urbaine.",
  imageSrc: "/img/paris-exploration.webp",
  imageAlt: "Image de la ville de Paris",
  sections: [
    {
      id: 1,
      heading: "Qu'est-ce qu'un Terrain Confus ?",
      content:
        "Les terrains confus sont des espaces urbains qui échappent à une classification précise. Ils peuvent être des friches industrielles, des terrains vagues, ou des zones en cours de réaménagement. Ces zones offrent une multitude d'usages potentiels et sont souvent le reflet des dynamiques économiques et sociales de la ville.",
      image: {
        src: "/img/paris-whatitis.webp",
        alt: "Exemple de terrain confus à Paris",
      },
    },
    {
      id: 2,
      heading: "L'Importance des Terrains Confus à Paris",
      content:
        "Ces espaces sont cruciaux pour comprendre l'évolution urbaine. Ils offrent des opportunités pour la biodiversité, des espaces pour l'expression artistique, et des zones pour de futurs projets de développement. Par exemple, des jardins communautaires peuvent émerger dans ces zones, offrant des espaces verts précieux en milieu urbain.",
      image: {
        src: "/img/paris-important.webp",
        alt: "Un jardin communautaire sur un terrain confus",
      },
    },
    {
      id: 3,
      heading: "Exemples de Terrains Confus à Paris",
      content:
        "Parmi les exemples célèbres, on trouve la Petite Ceinture, une ancienne voie ferrée qui serpente autour de Paris, ou encore les friches industrielles de la Plaine Saint-Denis. Ces zones sont devenues des lieux de promenade, de biodiversité urbaine, et de création artistique.",
      image: {
        src: "/img/paris-example.webp",
        alt: "La Petite Ceinture à Paris",
      },
    },
    {
      id: 4,
      heading: "L'Avenir des Terrains Confus",
      content:
        "Ces terrains sont souvent au cœur de projets de réhabilitation urbaine. Ils peuvent devenir des parcs, des centres culturels ou des zones résidentielles, transformant ainsi le paysage urbain. L'implication des communautés locales dans la planification et l'utilisation de ces espaces est essentielle pour leur succès futur.",
      image: {
        src: "/img/paris-future.webp",
        alt: "Projet de réhabilitation d'un terrain confus",
      },
    },
  ],
  conclusionTitle: "Pour résumer",
  conclusionParagraph:
    "Les terrains confus de Paris sont des espaces fascinants qui reflètent la complexité et la dynamique de la ville. Ils offrent un aperçu unique de l'évolution urbaine et de la manière dont nous pouvons réimaginer les espaces urbains.",
};

// ===========================================================================

export const historyPageData: PageData2Props = {
  title: "L'Histoire et l'Évolution des Terrains Confus à Paris",
  introduction:
    "Découvrez comment les terrains confus, ces espaces urbains en transition, ont évolué à Paris au fil du temps, reflétant les changements économiques et sociaux de la ville.",
  imageSrc: "/img/history-evolution.webp",
  imageAlt: "Image de l'évolution des terrains confus à Paris",
  sections: [
    {
      id: 1,
      heading: "Origines des Terrains Confus",
      content:
        "Les terrains confus à Paris trouvent souvent leurs origines dans les anciens sites industriels ou ferroviaires. Ces espaces ont été abandonnés ou sous-utilisés, créant des zones en marge du développement urbain traditionnel.",
      image: {
        src: "/img/history-origin.webp",
        alt: "Origines des terrains confus à Paris",
      },
    },
    {
      id: 2,
      heading: "L'Impact des Transformations Industrielles",
      content:
        "Avec le déclin de certaines industries et l'évolution des infrastructures urbaines, de nombreux terrains confus ont émergé. Ces espaces sont devenus des symboles de la transition industrielle et de la modernisation de Paris.",
      image: {
        src: "/img/history-impact.webp",
        alt: "Transformation industrielle des terrains confus",
      },
    },
    {
      id: 3,
      heading: "Utilisation et Réappropriation Actuelle",
      content:
        "Aujourd'hui, de nombreux terrains confus sont réappropriés par les communautés locales et les artistes. Ils deviennent des espaces de création, des jardins communautaires, ou des sites temporaires pour des événements culturels.",
      image: {
        src: "/img/history-utilisation.webp",
        alt: "Réappropriation des terrains confus",
      },
    },
    {
      id: 4,
      heading: "Futurs Développements et Perspectives",
      content:
        "L'avenir des terrains confus à Paris est prometteur. Avec des projets de réhabilitation en cours, ces espaces pourraient devenir des hubs d'innovation et des modèles de développement urbain durable.",
      image: {
        src: "/img/history-future.webp",
        alt: "Développements futurs des terrains confus",
      },
    },
  ],
  conclusionTitle: "Pour résumer",

  conclusionParagraph:
    "Les terrains confus de Paris illustrent parfaitement l'évolution de la ville. En comprenant leur histoire et leur transformation, nous pouvons mieux appréhender les défis et les opportunités qu'ils représentent pour le futur urbain.",
};

// ===========================================================================

export const polemicPageData: PageData2Props = {
  title: "La Polémique des Terrains Confus à Paris : Débats et Enjeux",
  introduction:
    "Les terrains confus à Paris sont au cœur d'une polémique intense. Découvrons les différents points de vue et les enjeux qui entourent ces espaces urbains en transition.",
  imageSrc: "/img/polemic-challenges.webp",
  imageAlt: "Image des Débats et Enjeux des terrains confus à Paris",
  sections: [
    {
      id: 1,
      heading: "Qu'est-ce qu'un Terrain Confus ?",
      content:
        "Les terrains confus sont des espaces urbains abandonnés ou sous-utilisés. À Paris, ces terrains sont souvent le résultat de la désindustrialisation ou du déplacement des infrastructures ferroviaires. Ces espaces sont aujourd'hui au centre de nombreux débats.",
      image: {
        src: "/img/polemic-whatitis.webp",
        alt: "Exemple de terrain confus à Paris",
      },
    },
    {
      id: 2,
      heading: "Les Partisans de la Réhabilitation",
      content:
        "Certains voient dans les terrains confus une opportunité unique de réaménagement urbain. Ils préconisent la transformation de ces espaces en parcs, en jardins communautaires, ou en centres culturels, apportant ainsi de la valeur ajoutée à la ville.",
      image: {
        src: "/img/polemic-supporters.webp",
        alt: "Réhabilitation des terrains confus",
      },
    },
    {
      id: 3,
      heading: "Les Opposants à la Réhabilitation",
      content:
        "D'autres sont contre la réhabilitation des terrains confus, arguant que ces espaces doivent rester intacts pour préserver la biodiversité urbaine et offrir des refuges pour la faune et la flore locales. Ils craignent que la transformation de ces espaces ne nuise à l'écosystème existant.",
      image: {
        src: "/img/polemic-opponents.webp",
        alt: "Opposition à la réhabilitation des terrains confus",
      },
    },
    {
      id: 4,
      heading: "Les Enjeux Économiques et Sociaux",
      content:
        "La réhabilitation des terrains confus soulève également des questions économiques et sociales. Les projets de développement peuvent entraîner une hausse des prix de l'immobilier et provoquer la gentrification de certains quartiers, excluant ainsi les habitants les plus modestes.",
      image: {
        src: "/img/polemic-challenges2.webp",
        alt: "Enjeux économiques et sociaux des terrains confus",
      },
    },
  ],
  conclusionTitle: "Pour résumer",

  conclusionParagraph:
    "La polémique autour des terrains confus à Paris est complexe et multifacette. Entre conservation de la biodiversité et réhabilitation urbaine, les décisions prises aujourd'hui façonneront le visage de Paris pour les années à venir.",
};

// ===========================================================================

export const sellPageData: PageData2Props = {
  title: "Opportunités de Vente des Terrains Confus à Paris",
  introduction:
    "Les terrains confus de Paris représentent une opportunité unique pour les investisseurs et les promoteurs immobiliers. Découvrez comment ces espaces peuvent être transformés et valorisés.",
  imageSrc: "/img/sell-opportunity.webp",
  imageAlt: "Investissement dans les terrains confus à Paris",
  sections: [
    {
      id: 1,
      heading: "Pourquoi Investir dans les Terrains Confus ?",
      content:
        "Les terrains confus à Paris offrent un potentiel énorme en termes de développement immobilier. Avec leur emplacement stratégique et leur coût relativement bas, ils représentent une opportunité d'investissement attractif pour les promoteurs à la recherche de nouveaux projets.",
      image: {
        src: "/img/sell-investment.webp",
        alt: "Pourquoi investir dans les terrains confus à Paris",
      },
    },
    {
      id: 2,
      heading: "Études de Cas : Transformations Réussies",
      content:
        "De nombreux projets ont déjà transformé des terrains confus en espaces urbains dynamiques. Par exemple, la réhabilitation de la Petite Ceinture en zones résidentielles et espaces verts a montré comment ces terrains peuvent être valorisés efficacement.",
      image: {
        src: "/img/sell-success.webp",
        alt: "Transformations réussies des terrains confus",
      },
    },
    {
      id: 3,
      heading: "Procédures et Réglementations",
      content:
        "Investir dans des terrains confus nécessite une compréhension claire des procédures et des réglementations locales. Il est crucial de se renseigner sur les autorisations nécessaires, les études de faisabilité, et les implications environnementales pour assurer le succès du projet.",
      image: {
        src: "/img/sell-procedures.webp",
        alt: "Procédures et réglementations pour les terrains confus",
      },
    },
    {
      id: 4,
      heading: "Perspectives Futures et Développements",
      content:
        "Avec l'évolution des politiques urbaines et une demande croissante pour des espaces innovants, les terrains confus de Paris sont au centre de nombreux projets de développement. Les investisseurs visionnaires peuvent tirer parti de ces tendances pour créer des espaces modernes et durables.",
      image: {
        src: "/img/sell-future.webp",
        alt: "Perspectives futures des terrains confus",
      },
    },
  ],
  conclusionTitle: "Pour résumer",
  conclusionParagraph:
    "Les terrains confus à Paris offrent une occasion en or pour les investisseurs immobiliers. En comprenant les avantages et les défis associés à ces terrains, vous pouvez transformer ces espaces en projets prospères et innovants.",
};
