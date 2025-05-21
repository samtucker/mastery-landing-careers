import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Mastery Learning - Build Elite Career Skills</title>
        <meta name="description" content="Master in-demand skills with AI-powered education and land your dream job. Join thousands of professionals building career-ready skills with Mastery Learning." />
        <meta property="og:title" content="Mastery Learning - Build Elite Career Skills" />
        <meta property="og:description" content="Master in-demand skills with AI-powered education and land your dream job. Join thousands of professionals building career-ready skills with Mastery Learning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masterylearning.ai" />
      </Helmet>
      <Navbar />
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
