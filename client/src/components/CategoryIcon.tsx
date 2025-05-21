import { LucideIcon } from "lucide-react";

interface CategoryIconProps {
  icon: LucideIcon;
  label: string;
}

export default function CategoryIcon({ icon: Icon, label }: CategoryIconProps) {
  return (
    <a href="#" className="flex flex-col items-center text-center space-y-2 group">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-primary">{label}</span>
    </a>
  );
}
