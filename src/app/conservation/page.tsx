import PageCard from "@/components/Global/PageCard";
import PageHero from "@/components/Global/PageHero";
import { conservationMetadata } from "@/constants/metadata";
import { Metadata } from "next";
import { conservationPageData } from "@/constants/data";

export const metadata: Metadata = conservationMetadata;

export default function Conservation() {
  return (
    <div className="flex flex-col gap-y-16">
      <PageHero {...conservationPageData.hero} />
      <div className="flex flex-col gap-y-10">
        <h3 className="title text-center">{conservationPageData.title}</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conservationPageData.cards.map((card, idx) => (
            <PageCard key={`${idx} ${card.title}`} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
