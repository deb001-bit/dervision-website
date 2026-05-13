"use client";

import { FadeIn } from "@/components/animations/fade-in";
import {
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";

export function ContactContent() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            Team
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            Meet Team Innoventures
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-16 max-w-3xl">
            The team behind Dervision — Team Innoventures, final year engineering students passionate
            about applying AI to healthcare challenges.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 mb-8 ambient-shadow">
            <h2 className="text-xl font-semibold text-primary mb-6">
              Team Members
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Debajyoti Rakshit", role: "Roll no 500122010007" },
                { name: "Arnab Bhattacharjee", role: "Roll no 500122010003" },
                { name: "Trideep Das", role: "Roll no 500122010026" },
                { name: "Anchal Sharma", role: "University roll no:- 500123011002" },
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">{member.name}</div>
                    <div className="text-xs text-on-surface-variant">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 mb-8">
            <h2 className="text-xl font-semibold text-primary mb-6">
              Institution Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">
                    Department
                  </div>
                  <div className="text-sm text-on-surface-variant">
                    Computer Science and Engineering
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">
                    College
                  </div>
                  <div className="text-sm text-on-surface-variant">
                    Guru Nanak Institute of Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <FadeIn delay={0.3}>
          <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 text-center">
            <p className="text-xs text-on-surface-variant leading-relaxed">
              This project is developed for educational and research purposes only
              and should not replace professional medical diagnosis.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
