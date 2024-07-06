import React from "react";
import { Metadata } from "next";
import { polemicPageData } from "@/constants/data";
import { polemicMetadata } from "@/constants/metadata";
import PageCard2 from "@/components/Global/PageCard2";

export const metadata: Metadata = polemicMetadata;

export default function Polemic() {
  return <PageCard2 {...polemicPageData} />;
}
