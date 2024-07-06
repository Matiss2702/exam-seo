import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-262.78px)] flex-col items-center justify-center gap-y-6 min-[357px]:h-[calc(100vh-242.78px)] min-[500px]:h-[calc(100vh-214.79px)] md:h-[calc(100vh-186.8px)] lg:h-[calc(100vh-202.39px)]">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl font-bold text-neutral-950">
          Oups, la page n&apos;a pas été trouvée
        </h1>
        <p className="text-lg text-gray-600">
          Il semble que la page que vous cherchez n&apos;existe pas ou a été
          déplacée.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-neutral-50 transition-opacity duration-200 hover:opacity-85"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}

// h-[70.8px] lg:h-[86.39px]
// 127.98 357:107.98px 500:79.99 md: 52;
