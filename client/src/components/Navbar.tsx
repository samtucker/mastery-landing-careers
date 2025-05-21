import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-neutral-800 hover:text-primary font-medium">Sign in</a>
            <Button size="lg" className="rounded-full font-medium">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
