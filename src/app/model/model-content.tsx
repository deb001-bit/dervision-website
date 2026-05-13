"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { trainingDetails, systemRequirements, techStack } from "@/data/site-data";
import {
  Layers,
  BarChart3,
  Database,
  Package,
  Cpu,
  MonitorSmartphone,
} from "lucide-react";

export function ModelContent() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
            Technical Details
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            AI Model & Architecture
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-16 max-w-3xl">
            A deep dive into the InceptionV3-based classification system, training
            methodology, dataset structure, and deployment pipeline.
          </p>
        </FadeIn>

        {/* Model Architecture */}
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 mb-6 ambient-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Layers className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-primary">
                Model Architecture
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {techStack.aiModel.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/10"
                >
                  <div className="text-sm font-semibold text-primary mb-1">
                    {item.name}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl micro-grid border border-accent/10">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The model uses InceptionV3 as its base architecture with transfer
                learning from ImageNet weights. Custom dense layers are added for
                the 11-class classification task. The model accepts 299×299 pixel
                input images and outputs probability distributions across all
                disease categories.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Training Details */}
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-xl font-semibold text-primary">
                Training Details
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                <div className="text-2xl font-semibold text-primary">
                  {trainingDetails.epochs}
                </div>
                <div className="text-xs text-on-surface-variant mt-1">
                  Training Epochs
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                <div className="text-2xl font-semibold text-accent">
                  {trainingDetails.validationPlateau}
                </div>
                <div className="text-xs text-on-surface-variant mt-1">
                  Plateau Epoch
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                <div className="text-2xl font-semibold text-primary">
                  {trainingDetails.totalClasses}
                </div>
                <div className="text-xs text-on-surface-variant mt-1">
                  Total Classes
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                <div className="text-2xl font-semibold text-primary">
                  {(trainingDetails.totalTrainingImages + trainingDetails.totalValidationImages).toLocaleString()}
                </div>
                <div className="text-xs text-on-surface-variant mt-1">
                  Total Images
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-primary mb-3">
                Training Process
              </h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <p>• Model trained for 20 epochs with early stopping monitoring</p>
                <p>• Validation accuracy plateaued after epoch 13, indicating optimal convergence</p>
                <p>• Dataset balancing techniques applied to handle class imbalance</p>
                <p>• Data augmentation used to improve generalization</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Dataset Structure */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/15 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Database className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-xl font-semibold text-primary">
                Dataset Structure
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-outline-variant/20">
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Dataset Type
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Images Per Class
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Total Classes
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Total Images
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant/10">
                    <td className="py-3 px-4 font-medium text-primary">
                      Training
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant">
                      {trainingDetails.trainingImagesPerClass.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant">
                      {trainingDetails.totalClasses}
                    </td>
                    <td className="py-3 px-4 font-medium text-primary">
                      {trainingDetails.totalTrainingImages.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-primary">
                      Validation
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant">
                      {trainingDetails.validationImagesPerClass}
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant">
                      {trainingDetails.totalClasses}
                    </td>
                    <td className="py-3 px-4 font-medium text-primary">
                      {trainingDetails.totalValidationImages.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Deployment */}
        <FadeIn delay={0.25}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Package className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold text-primary">
                  Deployment Pipeline
                </h2>
              </div>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  Model trained and exported as .h5 file
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  CustomTkinter UI wraps the model for user interaction
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  PyInstaller packages everything into a single .exe
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  No installation required — double-click to run
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-outline-variant/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <MonitorSmartphone className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-xl font-semibold text-primary">
                  System Requirements
                </h2>
              </div>
              <div className="space-y-2">
                {systemRequirements.map((req) => (
                  <div
                    key={req.label}
                    className="flex items-center justify-between py-2 border-b border-outline-variant/10 last:border-0"
                  >
                    <span className="text-sm text-on-surface-variant">
                      {req.label}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {req.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
