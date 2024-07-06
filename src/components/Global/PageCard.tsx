import Image from "next/image";

type PageCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export default function PageCard({ title, imageAlt, imageSrc }: PageCardProps) {
  return (
    <div className="group/conservationcard relative overflow-hidden rounded-xl text-neutral-950">
      <div className="relative size-full h-72 max-h-72 rounded-xl">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={imageAlt}
          priority
          fill
        />
      </div>
      <span className="absolute bottom-0 z-10 w-full translate-y-32 bg-primary-950/85 p-2 text-center font-pally text-xl text-neutral-50 transition-all duration-300 group-hover/conservationcard:-translate-y-0">
        {title}
      </span>
    </div>
  );
}
