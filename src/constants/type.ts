// ===========================================================================

export type NavbarDataProps = {
  href: string;
  label: string;
  isLogo?: boolean;
};

// ===========================================================================

export type FooterDataProps = {
  href: string;
  label: string;
};

// ===========================================================================

export type FooterPagesDataProps = {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  firstImageSrc: string;
  firstImageAlt: string;
  secondImageSrc: string;
  secondImageAlt: string;
  thirdImageSrc: string;
  thirdImageAlt: string;
};

// ===========================================================================

export type HomeHeroDataProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
};

// ===========================================================================

export type HomeSectionDataProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
};

// ===========================================================================

export type HomeCardDataProps = {
  title: string;
  paragraph: string;
  linkName: string;
  linkPath: string;
};

// ===========================================================================

export type HomeSourceCardDataProps = {
  title: string;
  path: string;
  imageSrc: string;
  imageAlt: string;
};

// ===========================================================================

export type PageHeroDataProps = {
  title: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
};

export type PageCardDataProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export type PageDataProps = {
  hero: PageHeroDataProps;
  title: string;
  cards: PageCardDataProps[];
};

// ===========================================================================

export type SectionDataProps = {
  id: number;
  heading: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
};

export type PageData2Props = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  introduction: string;
  sections: SectionDataProps[];
  conclusionTitle: string;
  conclusionParagraph: string;
};
