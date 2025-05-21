import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo />
            <nav className="hidden md:flex space-x-6 ml-10">
              <a href="#" className="text-neutral-800 hover:text-primary font-medium">Courses</a>
              <a href="#" className="text-neutral-800 hover:text-primary font-medium">Skills</a>
              <a href="#" className="text-neutral-800 hover:text-primary font-medium">About</a>
              <a href="#" className="text-neutral-800 hover:text-primary font-medium">Blog</a>
            </nav>
          </div>
          <div>
            <Button size="lg" className="rounded-full font-medium">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
