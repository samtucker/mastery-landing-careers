import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to accelerate your career?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of professionals who are building the skills they need for today's most in-demand roles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="rounded-full px-8 font-medium text-primary bg-white hover:bg-opacity-90"
            >
              Get started for free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 font-medium text-white border-white hover:bg-white hover:text-primary"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
