import React from "react";
import Image from "next/image";
import { HomeHeroDataProps } from "@/constants/type";

export default function HomeHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: HomeHeroDataProps) {
  return (
    <div className="group/plantation relative h-[50vh] w-full overflow-hidden rounded-3xl">
      <div className="absolute left-1/2 top-1/2 z-[1] flex -translate-x-1/2 -translate-y-1/2 flex-col gap-y-2 max-sm:w-full max-sm:p-5 sm:gap-y-4">
        <h1 className="font-pally text-4xl font-medium text-neutral-50 lg:max-w-[46.5rem] lg:text-6xl">
          <span className="text-primary-200">{title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </h1>
        <p className="text-lg text-neutral-50 lg:max-w-[41.5rem] lg:text-xl">
          {subtitle}
        </p>
      </div>
      <Image
        className="size-full rounded-3xl object-cover brightness-[0.45] transition-transform duration-300 group-hover/plantation:scale-105"
        width="1336"
        height="556"
        alt={imageAlt}
        src={imageSrc}
      />
    </div>
  );
}
