import Image from "next/image";
import Link from "next/link";

type HomeSourceCardProps = {
  title: string;
  path: string;
  imageSrc: string;
  imageAlt: string;
};

export default function HomeSourceCard({
  title,
  path,
  imageSrc,
  imageAlt,
}: HomeSourceCardProps) {
  return (
    <Link
      href={path}
      className="group/homesourcecard relative min-h-72 overflow-hidden rounded-xl text-neutral-950"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="rounded-xl object-cover"
        src={imageSrc}
        alt={imageAlt}
        fill
      />
      <span className="absolute bottom-0 z-10 w-full translate-y-12 bg-primary-950/85 py-2 text-center font-pally text-xl text-neutral-50 transition-all duration-300 group-hover/homesourcecard:-translate-y-0">
        {title}
      </span>
    </Link>
  );
}
