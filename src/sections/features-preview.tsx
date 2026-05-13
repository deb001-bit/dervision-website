"use client";

import { motion } from "framer-motion";
import {
  WifiOff,
  MousePointerClick,
  Monitor,
  Laptop,
  ShieldCheck,
  Brain,
  Layout,
  Grid3x3,
} from "lucide-react";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/animations/fade-in";
import { features } from "@/data/site-data";

const iconMap = {
  WifiOff,
  MousePointerClick,
  Monitor,
  Laptop,
  ShieldCheck,
  Brain,
  Layout,
  Grid3x3,
} as const;

export function FeaturesPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface-container-low/50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">
              Built for Precision & Privacy
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              A lightweight, offline-ready desktop application designed to deliver
              clinical-grade skin analysis without compromising your data privacy.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.slice(0, 8).map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={staggerChild}
                className="group bg-white rounded-2xl p-6 border border-outline-variant/15 hover:ambient-shadow hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/8 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
