"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/animations/fade-in";
import { techStack } from "@/data/site-data";

const categoryLabels: Record<string, { label: string; color: string }> = {
  aiModel: { label: "AI Model", color: "bg-accent" },
  desktopApp: { label: "Desktop Application", color: "bg-secondary" },
  website: { label: "Website", color: "bg-primary" },
};

export function TechStackPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface-container-low/50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">
              Powered by Modern Technology
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Built with industry-standard frameworks and tools for reliability,
              performance, and maintainability.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([key, items], idx) => {
            const cat = categoryLabels[key];
            return (
              <FadeIn key={key} delay={idx * 0.12}>
                <div className="bg-white rounded-2xl p-6 border border-outline-variant/15 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-2 h-2 rounded-full ${cat.color}`}
                    />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/10 hover:border-accent/15 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium text-primary">
                          {item.name}
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
