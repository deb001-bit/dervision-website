import type { Metadata } from "next";
import { ChallengesContent } from "./challenges-content";

export const metadata: Metadata = {
  title: "Challenges & Limitations — Dervision",
  description:
    "Understanding the technical challenges, dataset limitations, and honest assessment of the Dervision skin disease detection system.",
};

export default function ChallengesPage() {
  return <ChallengesContent />;
}
