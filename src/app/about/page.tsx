import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About — Dervision",
  description:
    "Learn about Dervision, an AI-powered skin disease detection system. Understand the project background, motivation, and vision.",
};

export default function AboutPage() {
  return <AboutContent />;
}
