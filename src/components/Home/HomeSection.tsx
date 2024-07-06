import { cn } from "@/utils/cn";
import Image from "next/image";

type HomeSectionProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
};

export default function HomeSection({
  title,
  text,
  imageAlt,
  imageSrc,
  reverse,
}: HomeSectionProps) {
  return (
    <section className="group/homesection grid grid-cols-1 items-center gap-x-16 max-sm:gap-y-2 sm:grid-cols-2 lg:gap-x-24">
      <div
        className={cn(
          "flex flex-col gap-y-1 transition-transform duration-300 sm:gap-y-3",
          reverse
            ? "group-hover/homesection:-translate-x-4 sm:order-last"
            : "group-hover/homesection:translate-x-4",
        )}
      >
        <h2 className="title">{title}</h2>
        <p className="sm:text-lg">{text}</p>
      </div>
      <div
        className={cn(
          "relative h-72 w-full rounded-2xl transition-transform duration-300",
          reverse
            ? "group-hover/homesection:translate-x-4"
            : "group-hover/homesection:-translate-x-4",
        )}
      >
        <Image
          className="rounded-2xl object-cover"
          src={imageSrc}
          alt={imageAlt}
          fill
        />
      </div>
    </section>
  );
}
