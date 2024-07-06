import Image from "next/image";

type PageHeroProps = {
  title: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
};

export default function PageHero({
  title,
  paragraph,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <div className="group/conservationhero grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-x-10">
      <div className="flex flex-col gap-y-1 transition-transform duration-300 sm:gap-y-2.5 sm:group-hover/conservationhero:translate-x-4 lg:gap-y-3.5">
        <h1 className="title">{title}</h1>
        <p className="">{paragraph}</p>
      </div>
      <div className="relative h-72 w-full rounded-3xl transition-transform duration-300 sm:group-hover/conservationhero:-translate-x-4">
        <Image
          className="rounded-3xl object-cover"
          src={imageSrc}
          alt={imageAlt}
          priority
          fill
        />
      </div>
    </div>
  );
}
