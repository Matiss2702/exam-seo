import FooterPages from "@/components/Global/FooterPages";
import { confidentialityPageData } from "@/constants/data";
import { confidentialityMetadata } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = confidentialityMetadata;

export default function Confidentiality() {
  return <FooterPages {...confidentialityPageData} />;
}
