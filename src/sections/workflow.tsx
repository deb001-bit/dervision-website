"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, FileCheck, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const steps = [
  {
    step: 1,
    icon: Upload,
    title: "Capture Image",
    description:
      "Import a high-resolution photograph of the skin area to be analyzed into the desktop application.",
  },
  {
    step: 2,
    icon: Cpu,
    title: "AI Analysis",
    description:
      "The InceptionV3 neural network processes and analyzes the image against millions of trained parameters.",
  },
  {
    step: 3,
    icon: FileCheck,
    title: "Classification",
    description:
      "Receive a detailed probability breakdown across 11 distinct skin conditions with confidence scores.",
  },
];

export function WorkflowSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">
              Clinical Precision in Three Steps
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              A streamlined workflow designed for clarity and rapid diagnostic support.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <FadeIn key={step.step} delay={idx * 0.15}>
              <div className="relative group">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] right-0 h-px">
                    <div className="h-full bg-gradient-to-r from-outline-variant/40 to-transparent" />
                    <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-outline-variant/40" />
                  </div>
                )}

                <div className="text-center">
                  {/* Step Number + Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-surface-container border border-outline-variant/20 flex items-center justify-center group-hover:bg-accent/5 group-hover:border-accent/20 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-primary text-white text-xs font-semibold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
