"use client";

import { motion } from "framer-motion";
import {
  Database,
  TrendingUp,
  Plus,
  Smartphone,
  Cloud,
  Globe,
  Zap,
  Camera,
} from "lucide-react";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/animations/fade-in";
import { futurePlans } from "@/data/site-data";
import clsx from "clsx";

const iconMap = {
  Database,
  TrendingUp,
  Plus,
  Smartphone,
  Cloud,
  Globe,
  Zap,
  Camera,
} as const;

const statusColors: Record<string, string> = {
  Planned: "bg-blue-50 text-blue-700",
  Research: "bg-purple-50 text-purple-700",
  Future: "bg-amber-50 text-amber-700",
};

export function FutureContent() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            Roadmap
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            Future Improvements
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-16 max-w-3xl">
            Our roadmap for expanding Dervision's capabilities, improving accuracy,
            and bringing AI-powered skin analysis to more platforms.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {futurePlans.map((plan) => {
            const Icon = iconMap[plan.icon];
            return (
              <motion.div
                key={plan.title}
                variants={staggerChild}
                className="bg-white rounded-2xl p-6 border border-outline-variant/15 hover:ambient-shadow hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-primary">
                        {plan.title}
                      </h3>
                      <span
                        className={clsx(
                          "text-[10px] font-medium px-2 py-0.5 rounded-full",
                          statusColors[plan.status]
                        )}
                      >
                        {plan.status}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {plan.description}
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
