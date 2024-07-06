import React from "react";
import { Metadata } from "next";
import { sellPageData } from "@/constants/data";
import { sellMetadata } from "@/constants/metadata";
import PageCard2 from "@/components/Global/PageCard2";

export const metadata: Metadata = sellMetadata;

export default function Sell() {
  return <PageCard2 {...sellPageData} />;
}
