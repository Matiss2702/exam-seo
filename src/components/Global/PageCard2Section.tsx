import { SectionDataProps } from "@/constants/type";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

type PageCard2SectionProps = SectionDataProps & {
  reverse: boolean;
};

export default function PageCard2Section({
  heading,
  content,
  image,
  reverse = false,
}: PageCard2SectionProps) {
  return (
    <section className="grid grid-cols-1 items-center gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-20">
      <div
        className={cn(
          "flex flex-col gap-y-4 md:gap-y-2.5",
          reverse && "md:order-last",
        )}
      >
        <h2 className="title max-md:text-center">{heading}</h2>
        <div className="relative h-72 rounded-3xl md:hidden">
          <Image
            className="rounded-3xl"
            src={image.src}
            alt={image.alt}
            objectFit="cover"
            priority
            fill
          />
        </div>
        <p>{content}</p>
      </div>
      <div className="relative size-full min-h-72 rounded-3xl max-md:hidden">
        <Image
          className="rounded-3xl"
          src={image.src}
          alt={image.alt}
          objectFit="cover"
          priority
          fill
        />
      </div>
    </section>
  );
}
