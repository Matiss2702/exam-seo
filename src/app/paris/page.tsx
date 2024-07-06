import React from "react";
import { Metadata } from "next";
import { parisPageData } from "@/constants/data";
import { parisMetadata } from "@/constants/metadata";
import PageCard2 from "@/components/Global/PageCard2";

export const metadata: Metadata = parisMetadata;

export default function Paris() {
  return <PageCard2 {...parisPageData} />;
}
