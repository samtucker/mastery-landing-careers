import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>SkillForge AI - Build Elite Career Skills</title>
        <meta name="description" content="Master in-demand skills with AI-powered education and land your dream job. Join thousands of professionals building career-ready skills with SkillForge." />
        <meta property="og:title" content="SkillForge AI - Build Elite Career Skills" />
        <meta property="og:description" content="Master in-demand skills with AI-powered education and land your dream job. Join thousands of professionals building career-ready skills with SkillForge." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skillforge.ai" />
      </Helmet>
      <Navbar />
      <NewsTicker />
      <main>
        <HeroSection />
        <SkillsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
