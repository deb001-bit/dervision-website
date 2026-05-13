"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerChild } from "@/components/animations/fade-in";
import { diseaseClasses } from "@/data/site-data";
import clsx from "clsx";

const severityColors: Record<string, string> = {
  Critical: "bg-red-50 text-red-700 border-red-200",
  High: "bg-orange-50 text-orange-700 border-orange-200",
  Moderate: "bg-amber-50 text-amber-700 border-amber-200",
  Low: "bg-blue-50 text-blue-700 border-blue-200",
  Normal: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const severityDot: Record<string, string> = {
  Critical: "bg-red-500",
  High: "bg-orange-500",
  Moderate: "bg-amber-500",
  Low: "bg-blue-500",
  Normal: "bg-emerald-500",
};

export function ClassesContent() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            Classification
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            Disease Classes
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-16 max-w-3xl">
            Dervision classifies skin conditions into 11 distinct categories. Each
            class represents a specific dermatological condition with varying
            severity levels.
          </p>
        </FadeIn>

        {/* Legend */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-10">
            {Object.entries(severityColors).map(([severity, classes]) => (
              <div
                key={severity}
                className={clsx(
                  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium",
                  classes
                )}
              >
                <div className={clsx("w-1.5 h-1.5 rounded-full", severityDot[severity])} />
                {severity}
              </div>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {diseaseClasses.map((disease) => (
            <motion.div
              key={disease.id}
              variants={staggerChild}
              className="bg-white rounded-2xl p-6 border border-outline-variant/15 hover:ambient-shadow hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">{disease.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-on-surface-variant bg-surface-container rounded px-2 py-0.5">
                      #{disease.id.toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-primary">
                      {disease.name}
                    </h3>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
                    {disease.description}
                  </p>
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border",
                      severityColors[disease.severity]
                    )}
                  >
                    <div
                      className={clsx(
                        "w-1.5 h-1.5 rounded-full",
                        severityDot[disease.severity]
                      )}
                    />
                    {disease.severity} Severity
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
