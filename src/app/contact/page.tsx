import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact & Team — Dervision",
  description:
    "Meet the Dervision team. Contact us for inquiries about the AI skin disease detection system.",
};

export default function ContactPage() {
  return <ContactContent />;
}
