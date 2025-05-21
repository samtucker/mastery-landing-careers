import { Button } from "@/components/ui/button";
import CategoryIcon from "./CategoryIcon";
import SkillCard from "./SkillCard";
import { 
  Code, BarChart, DollarSign, PackageOpen, Briefcase, 
  LineChart, PenTool, GraduationCap, Network, Cpu, 
  Globe, Smile, Zap, Database, GitBranch, Server
} from "lucide-react";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  const categories = [
    { icon: Code, label: "Software" },
    { icon: BarChart, label: "Data Science" },
    { icon: DollarSign, label: "Finance" },
    { icon: PackageOpen, label: "Product" },
    { icon: Briefcase, label: "Business" },
    { icon: LineChart, label: "Consulting" },
    { icon: PenTool, label: "Design" },
    { icon: GraduationCap, label: "More" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Your perfect interview starts here
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practice with 100+ expert-vetted interviews, get feedback on your performance, and land your dream opportunity.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 md:space-x-6 min-w-max md:justify-center py-2">
            {categories.map((category, index) => (
              <CategoryIcon key={index} icon={category.icon} label={category.label} />
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              description={skill.description}
              duration={skill.duration}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="rounded-full px-8 font-medium">
            View all interviews
          </Button>
        </div>
      </div>
    </section>
  );
}
