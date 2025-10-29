import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyMamnon from "@/components/WhyMamnon";
import HowItWorks from "@/components/HowItWorks";
import AppFeatures from "@/components/AppFeatures";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1f1a]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMamnon />
        <HowItWorks />
        <AppFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
