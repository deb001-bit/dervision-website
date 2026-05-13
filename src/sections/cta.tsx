"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, Download } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary" />
      <div className="absolute inset-0 micro-grid opacity-30" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
            Explore the Complete Project
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Dive into the technical details, understand the AI model architecture,
            explore the dataset structure, and learn about our development process.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1RUCY0KcWvp3NVHYgenFPyUyxz2JSL4kh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-dim transition-colors duration-200"
            >
              Download for Windows
              <Download className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="inline-flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-left max-w-xl">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-white/50 leading-relaxed">
              This project is developed for educational and research purposes only
              and should not replace professional medical diagnosis.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
