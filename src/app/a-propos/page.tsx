import FooterPages from "@/components/Global/FooterPages";
import { aboutPageData } from "@/constants/data";
import { aboutMetadata } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = aboutMetadata;

export default function About() {
  return <FooterPages {...aboutPageData} />;
}
