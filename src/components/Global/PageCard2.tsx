import React from "react";
import { PageData2Props } from "@/constants/type";
import PageCard2Section from "./PageCard2Section";
import Image from "next/image";

export default function PageCard2({
  title,
  conclusionTitle,
  conclusionParagraph,
  introduction,
  sections,
  imageAlt,
  imageSrc,
}: PageData2Props) {
  return (
    <article className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24">
      <div className="flex flex-col gap-y-4">
        <h1 className="title text-center">{title}</h1>
        <div className="relative h-96 w-full rounded-3xl">
          <Image
            className="rounded-3xl"
            objectFit="cover"
            fill
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
        <p>{introduction}</p>
      </div>
      <div className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
        {sections.map((section, idx) => (
          <PageCard2Section
            key={section.id}
            {...section}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-4 md:gap-y-2.5">
        <h2 className="title">{conclusionTitle}</h2>
        <p>{conclusionParagraph}</p>
      </div>
    </article>
  );
}
