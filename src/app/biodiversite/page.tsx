import PageCard from "@/components/Global/PageCard";
import PageHero from "@/components/Global/PageHero";
import { biodiversityPageData } from "@/constants/data";
import { biodiversityMetadata } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = biodiversityMetadata;

export default function Biodiversity() {
  return (
    <div className="flex flex-col gap-y-16">
      <PageHero {...biodiversityPageData.hero} />
      <div className="flex flex-col gap-y-10">
        <h3 className="title text-center">{biodiversityPageData.title}</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {biodiversityPageData.cards.map((card, idx) => (
            <PageCard key={`${idx} ${card.title}`} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
