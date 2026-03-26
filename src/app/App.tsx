import { HeroSection } from "./components/hero-section";
import { TargetAudience } from "./components/target-audience";
import { ProgramSection } from "./components/program-section";
import { WhySpecial } from "./components/why-special";
import { RequirementsSection } from "./components/requirements-section";
import { PricingSection } from "./components/pricing-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TargetAudience />
      <ProgramSection />
      <WhySpecial />
      <RequirementsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
