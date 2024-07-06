import Image from "next/image";

type FooterPagesProps = {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  firstImageSrc: string;
  secondImageSrc: string;
  thirdImageSrc: string;
  firstImageAlt: string;
  secondImageAlt: string;
  thirdImageAlt: string;
};

export default function FooterPages({
  firstImageAlt,
  firstImageSrc,
  firstParagraph,
  secondImageAlt,
  secondImageSrc,
  secondParagraph,
  thirdImageAlt,
  thirdImageSrc,
  title,
}: FooterPagesProps) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="group/footerpagestitle flex flex-col gap-y-4">
        <h1 className="title text-center">{title}</h1>
        <div className="relative h-72 overflow-hidden rounded-3xl">
          <Image
            className="size-full rounded-3xl object-cover transition-transform duration-300 group-hover/footerpagestitle:scale-105"
            src={firstImageSrc}
            alt={firstImageAlt}
            priority
            fill
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-y-4 rounded-3xl">
          <div className="group/footerpagesfirstparagraph relative h-56 overflow-hidden rounded-3xl md:h-72">
            <Image
              className="size-full rounded-3xl object-cover transition-transform duration-300 group-hover/footerpagesfirstparagraph:scale-105"
              src={secondImageSrc}
              alt={secondImageAlt}
              priority
              fill
            />
          </div>
          <p className="text-pretty md:text-lg">{firstParagraph}</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="group/footerpagessecondparagraph relative h-56 overflow-hidden rounded-3xl md:h-72">
            <Image
              className="size-full rounded-3xl object-cover transition-transform duration-300 group-hover/footerpagessecondparagraph:scale-105"
              src={thirdImageSrc}
              alt={thirdImageAlt}
              priority
              fill
            />
          </div>
          <p className="text-pretty md:text-lg">{secondParagraph}</p>
        </div>
      </div>
    </div>
  );
}
