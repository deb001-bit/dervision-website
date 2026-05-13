"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Target, Eye, Lightbulb, BookOpen, TrendingUp, Heart } from "lucide-react";

export function AboutContent() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            About Dervision
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-12 max-w-3xl">
            Dervision is an AI-powered skin disease detection system developed as
            a final year engineering project, designed to demonstrate the
            practical application of deep learning in healthcare.
          </p>
        </FadeIn>

        {/* What is Dervision */}
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 mb-8 ambient-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-primary">
                What is Dervision?
              </h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Dervision is a standalone desktop application that uses a trained
              deep learning model based on InceptionV3 architecture to classify
              skin conditions into 11 different categories using image-based
              analysis. The system operates entirely offline, ensuring complete
              data privacy for users.
            </p>
          </div>
        </FadeIn>

        {/* Why It Matters */}
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-xl font-semibold text-primary">
                Why Skin Disease Detection Matters
              </h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Skin diseases affect millions worldwide, and early detection is
              crucial for effective treatment. Many skin conditions, including
              melanoma, have significantly better outcomes when caught early.
              AI-assisted tools can help bridge the gap in dermatological care,
              especially in areas with limited access to specialists.
            </p>
          </div>
        </FadeIn>

        {/* Problem & Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-xl font-semibold text-primary">
                  Problem Statement
                </h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Access to dermatological expertise is limited in many regions.
                Visual inspection by untrained individuals often leads to
                misidentification of skin conditions. There is a need for
                accessible, offline-capable tools that can assist in preliminary
                skin condition assessment.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                </div>
                <h2 className="text-xl font-semibold text-primary">
                  Objectives
                </h2>
              </div>
              <ul className="space-y-2 text-on-surface-variant text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Build an AI model for skin disease classification
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Create a user-friendly desktop application
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Ensure complete offline functionality
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Classify 11 different skin conditions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Maintain data privacy and security
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Vision */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold">Project Vision</h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Dervision aims to demonstrate how AI can be practically applied in
              healthcare, making skin disease screening more accessible. While
              currently a research project, the long-term vision is to develop
              this into a reliable tool that can assist healthcare professionals
              and individuals in early detection of skin conditions.
            </p>
            <div className="flex items-center gap-2 text-accent text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Building towards a healthier future with AI</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
