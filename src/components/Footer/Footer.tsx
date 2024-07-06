import { footerLinks } from "@/constants/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-700 py-4 font-pally text-sm text-neutral-50">
      <div className="container flex justify-between max-md:flex-col max-md:items-center max-md:gap-y-2">
        <div className="flex gap-x-0.5 max-md:order-last max-xs:flex-col max-xs:gap-y-2 max-xs:text-center">
          <p className="max-md:text-center">
            &copy; 2024 Éducation Écologique Terrain Confus.
          </p>
          <p>Tous droits réservés.</p>
        </div>
        <ul className="flex gap-x-4">
          {footerLinks.map((link) => (
            <li key={link.href} className="text-center hover:opacity-80">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
