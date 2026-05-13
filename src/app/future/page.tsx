import type { Metadata } from "next";
import { FutureContent } from "./future-content";

export const metadata: Metadata = {
  title: "Future Scope — Dervision",
  description:
    "Explore the roadmap for Dervision: mobile apps, cloud deployment, expanded disease classes, GPU optimization, and more.",
};

export default function FuturePage() {
  return <FutureContent />;
}
