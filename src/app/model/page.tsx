import type { Metadata } from "next";
import { ModelContent } from "./model-content";

export const metadata: Metadata = {
  title: "AI Model & Technical Details — Dervision",
  description:
    "Deep dive into Dervision's InceptionV3 architecture, transfer learning approach, training details, dataset structure, and deployment pipeline.",
};

export default function ModelPage() {
  return <ModelContent />;
}
