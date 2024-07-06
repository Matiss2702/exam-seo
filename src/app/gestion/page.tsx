import PageCard from "@/components/Global/PageCard";
import PageHero from "@/components/Global/PageHero";
import { gestionMetadata } from "@/constants/metadata";
import { Metadata } from "next";
import { gestionPageData } from "@/constants/data";

export const metadata: Metadata = gestionMetadata;

export default function Gestion() {
  return (
    <div className="flex flex-col gap-y-16">
      <PageHero {...gestionPageData.hero} />
      <div className="flex flex-col gap-y-10">
        <h3 className="title text-center">{gestionPageData.title}</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gestionPageData.cards.map((card, idx) => (
            <PageCard key={`${idx} ${card.title}`} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
