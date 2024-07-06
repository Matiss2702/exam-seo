import Link from "next/link";

type HomeCardProps = {
  title: string;
  paragraph: string;
  linkPath: string;
  linkName: string;
};

export default function HomeCard({
  title,
  paragraph,
  linkName,
  linkPath,
}: HomeCardProps) {
  return (
    <div className="flex flex-col items-end justify-between gap-y-4 rounded-lg border border-black/[0.1] p-4 transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col gap-y-1.5">
        <h3 className="font-pally text-2xl font-medium">{title}</h3>
        <p className="text-pretty">{paragraph}</p>
      </div>
      <Link
        href={linkPath}
        className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-neutral-50 transition-opacity duration-200 hover:opacity-85"
      >
        {linkName}
      </Link>
    </div>
  );
}
