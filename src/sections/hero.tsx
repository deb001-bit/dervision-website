"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Cpu, Scan, Download } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent/20"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-on-surface-variant tracking-wide uppercase">
                  A Project by Team Innoventures
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight text-primary mb-6">
                AI-Powered Skin Disease{" "}
                <span className="gradient-text">Detection System</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Dervision uses Deep Learning and InceptionV3 architecture to
                classify skin conditions into 11 categories through an offline
                desktop software experience.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mb-8 p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-sm text-on-surface-variant shadow-sm">
                <div className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent" />
                  System Requirements
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    <span><strong className="text-primary font-medium">CPU:</strong> Intel i5-6400 / i5-6500 or AMD Ryzen 3 1200 / 2200G+</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    <span><strong className="text-primary font-medium">OS:</strong> Windows 10 (64-bit) or higher</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    <span><strong className="text-primary font-medium">Storage:</strong> 2 GB available space</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    <span><strong className="text-primary font-medium">Display:</strong> 1366×768 minimum resolution</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/DERVISION.rar"
                  download
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-container transition-colors duration-200 ambient-shadow"
                >
                  Download for Windows
                  <Download className="w-4 h-4" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-outline-variant/50 text-primary rounded-xl font-medium text-sm hover:bg-surface-container transition-colors duration-200"
                >
                  Explore Project
                </Link>
              </div>
            </FadeIn>

            {/* Stats Row */}
            <FadeIn delay={0.4}>
              <div className="mt-14 flex gap-10">
                <div>
                  <div className="text-2xl font-semibold text-primary">11</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">
                    Disease Classes
                  </div>
                </div>
                <div className="w-px bg-outline-variant/30" />
                <div>
                  <div className="text-2xl font-semibold text-primary">
                    13.2K
                  </div>
                  <div className="text-xs text-on-surface-variant mt-0.5">
                    Training Images
                  </div>
                </div>
                <div className="w-px bg-outline-variant/30" />
                <div>
                  <div className="text-2xl font-semibold text-primary">
                    100%
                  </div>
                  <div className="text-xs text-on-surface-variant mt-0.5">
                    Offline
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Visual Element — Clinical Analysis Card */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative hidden lg:block">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl ambient-shadow p-8 border border-outline-variant/20">
                <div className="micro-grid rounded-xl p-6">
                  {/* Simulated Analysis UI */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Scan className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary">
                        Skin Analysis
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        AI Classification Results
                      </div>
                    </div>
                    <div className="ml-auto px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      Active
                    </div>
                  </div>

                  {/* Analysis Bars */}
                  <div className="space-y-3">
                    {[
                      { label: "Healthy Skin", value: 87, color: "bg-accent" },
                      {
                        label: "Melanocytic Nevi",
                        value: 8,
                        color: "bg-secondary",
                      },
                      {
                        label: "Benign Keratosis",
                        value: 3,
                        color: "bg-outline",
                      },
                      { label: "Other", value: 2, color: "bg-outline-variant" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-on-surface-variant">
                            {item.label}
                          </span>
                          <span className="font-medium text-primary">
                            {item.value}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${item.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{
                              duration: 1.2,
                              delay: 0.8,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Confidence Badge */}
                  <div className="mt-6 flex items-center justify-between p-3 rounded-xl bg-accent/5 border border-accent/10">
                    <span className="text-xs text-on-surface-variant">
                      Confidence Score
                    </span>
                    <span className="text-lg font-semibold text-accent">
                      92.4%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl ambient-shadow px-4 py-3 border border-outline-variant/20"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-primary">
                    Private & Secure
                  </span>
                </div>
              </motion.div>

              {/* Bottom-left Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl ambient-shadow px-4 py-3 border border-outline-variant/20"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-medium text-primary">
                    InceptionV3
                  </span>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
