import React from "react";
import { Metadata } from "next";
import { historyPageData } from "@/constants/data";
import { historyMetadata } from "@/constants/metadata";
import PageCard2 from "@/components/Global/PageCard2";

export const metadata: Metadata = historyMetadata;

export default function History() {
  return <PageCard2 {...historyPageData} />;
}
