import { Button } from "@/components/ui/button";
import GlobeGraphic from "./GlobeGraphic";

export default function HeroSection() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-neutral-800 mb-6">
              Master the skills for elite opportunities
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join thousands of professionals around the world using SkillForge to build their career-ready skills through AI-powered education and land their dream opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 font-medium">
                Start learning today
              </Button>
              <Button variant="ghost" size="lg" className="text-primary font-medium">
                Explore courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="relative">
            <GlobeGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
