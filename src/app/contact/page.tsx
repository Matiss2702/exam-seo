import FooterPages from "@/components/Global/FooterPages";
import { contactMetadata } from "@/constants/metadata";
import { Metadata } from "next";
import { contactPageData } from "@/constants/data";

export const metadata: Metadata = contactMetadata;

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-4">
      <FooterPages {...contactPageData} />
      {/* Ajoutez ici un formulaire de contact */}
    </div>
  );
}
