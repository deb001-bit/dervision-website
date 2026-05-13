import type { Metadata } from "next";
import { ClassesContent } from "./classes-content";

export const metadata: Metadata = {
  title: "Disease Classes — Dervision",
  description:
    "Explore all 11 skin disease categories supported by Dervision: from eczema and melanoma to healthy skin classification.",
};

export default function ClassesPage() {
  return <ClassesContent />;
}
