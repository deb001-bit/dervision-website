"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/animations/fade-in";
import { diseaseClasses } from "@/data/site-data";
import clsx from "clsx";

const severityColors: Record<string, string> = {
  Critical: "bg-red-50 text-red-700 border-red-100",
  High: "bg-orange-50 text-orange-700 border-orange-100",
  Moderate: "bg-amber-50 text-amber-700 border-amber-100",
  Low: "bg-blue-50 text-blue-700 border-blue-100",
  Normal: "bg-emerald-50 text-emerald-700 border-emerald-100",
};

export function DiseaseClassesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              Classification
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">
              11 Supported Conditions
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our classification model is trained on diverse clinical datasets to
              identify distinct dermatological conditions.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {diseaseClasses.map((disease) => (
            <motion.div
              key={disease.id}
              variants={staggerChild}
              className="group bg-white rounded-xl p-5 border border-outline-variant/15 hover:ambient-shadow hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{disease.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-sm font-semibold text-primary truncate">
                      {disease.name}
                    </h3>
                    <span
                      className={clsx(
                        "text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0",
                        severityColors[disease.severity]
                      )}
                    >
                      {disease.severity}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                    {disease.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dim transition-colors duration-200"
            >
              View all disease classes in detail →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
