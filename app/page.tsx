import CEOSection from "@/components/CEO";
import TestimonialsSection from "@/components/Clients";
import ContactSection from "@/components/Contact";
import FooterSection from "@/components/Footer";
import PremiumHeroSection from "@/components/Hero";
import Navigation from "@/components/Navbar";
import PricingSection from "@/components/Pricing";
import ServicesSection from "@/components/Services";
import CaseStudiesSection from "@/components/Story";

export default function Home() {
  return (
    <>
    <Navigation/>
    <PremiumHeroSection/>
    <CEOSection />
    <ServicesSection />
    <PricingSection />
    <CaseStudiesSection />
    <TestimonialsSection/>
    <ContactSection/>
    <FooterSection />
    </>
  );
}
