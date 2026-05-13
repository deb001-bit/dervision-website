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

export function FeaturesContent() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            Features
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            Software Capabilities
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-16 max-w-3xl">
            Dervision is designed as a lightweight, offline-first desktop
            application with a focus on privacy, ease of use, and clinical
            precision.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={staggerChild}
                className="group bg-white rounded-2xl p-8 border border-outline-variant/15 hover:ambient-shadow hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/8 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
