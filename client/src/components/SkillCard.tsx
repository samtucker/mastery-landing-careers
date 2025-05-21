import { Clock } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  duration: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  color: "purple" | "blue" | "green" | "yellow";
}

export default function SkillCard({ 
  title, 
  description, 
  duration, 
  level, 
  color 
}: SkillCardProps) {
  const colorMap = {
    purple: "bg-[hsl(var(--card-purple))]",
    blue: "bg-[hsl(var(--card-blue))]",
    green: "bg-[hsl(var(--card-green))]",
    yellow: "bg-[hsl(var(--card-yellow))]",
  };

  return (
    <div className={`${colorMap[color]} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
      <div className="p-6">
        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm mt-auto">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration} hours</span>
          </div>
          <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">{level}</span>
        </div>
      </div>
    </div>
  );
}
