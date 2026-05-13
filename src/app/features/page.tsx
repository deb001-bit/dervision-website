import type { Metadata } from "next";
import { FeaturesContent } from "./features-content";

export const metadata: Metadata = {
  title: "Features — Dervision",
  description:
    "Explore the features of Dervision: offline AI classification, Windows compatibility, privacy-first design, and one-click execution.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
