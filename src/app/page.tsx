import { HeroSection } from "@/sections/hero";
import { FeaturesPreview } from "@/sections/features-preview";
import { WorkflowSection } from "@/sections/workflow";
import { CTASection } from "@/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesPreview />
      <WorkflowSection />
      <CTASection />
    </>
  );
}
