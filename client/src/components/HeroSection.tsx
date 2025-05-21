import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-neutral-800 mb-6">
              Mastery Learning builds skills for elite opportunities
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join thousands of professionals around the world using Mastery Learning to develop the exact career skills needed to land their dream opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 font-medium">
                Start learning today
              </Button>
              <Button variant="ghost" size="lg" className="text-primary font-medium">
                Explore skills
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Bell curve chart created with SVG */}
            <svg viewBox="0 0 500 400" className="w-full max-w-lg mx-auto">
              <g transform="translate(50, 50)">
                {/* Axes */}
                <line x1="0" y1="300" x2="400" y2="300" stroke="#0f172a" strokeWidth="4" />
                <line x1="0" y1="0" x2="0" y2="300" stroke="#0f172a" strokeWidth="4" />
                
                {/* Bell curves */}
                <path d="M0,300 C40,300 80,250 150,80 C220,250 300,300 400,300" fill="none" stroke="#3b82f6" strokeWidth="8" />
                <path d="M0,300 C40,300 100,200 200,40 C300,200 360,300 400,300" fill="none" stroke="#ef4444" strokeWidth="8" />
                <path d="M0,300 C40,300 120,250 250,10 C380,250 360,300 400,300" fill="none" stroke="#f59e0b" strokeWidth="8" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
