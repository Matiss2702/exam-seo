import HomeCard from "@/components/Home/HomeCard";
import HomeHero from "@/components/Home/HomeHero";
import HomeSection from "@/components/Home/HomeSection";
import HomeSourceCard from "@/components/Home/HomeSourceCard";
import {
  homeCardData,
  homeHeroData,
  homeSectionData,
  homeSourceCardData,
} from "@/constants/data";
import { homeMetadata } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24">
      <HomeHero {...homeHeroData} />
      <div className="flex flex-col gap-y-4 sm:gap-y-8 md:gap-y-12 lg:gap-y-14">
        {homeSectionData.map((section, idx) => (
          <HomeSection key={`${idx} ${section.title}`} {...section} />
        ))}
      </div>

      <div className="flex flex-col gap-y-6 sm:gap-y-10">
        <h2 className="title text-center">Obtenir plus d&apos;informations</h2>
        <div className="grid grid-cols-1 gap-y-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeCardData.map((card, idx) => (
            <HomeCard key={`${idx} ${card.title}`} {...card} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-6 sm:gap-y-10">
        <h2 className="title">Nos sources</h2>
        <div className="grid grid-cols-1 gap-y-4 sm:gap-6 lg:grid-cols-3">
          {homeSourceCardData.map((source, idx) => (
            <HomeSourceCard key={`${idx} ${source.title}`} {...source} />
          ))}
        </div>
      </div>
    </div>
  );
}
