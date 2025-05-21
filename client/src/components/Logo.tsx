import { Link } from "wouter";

interface LogoProps {
  textColor?: string;
}

export default function Logo({ textColor = "text-primary" }: LogoProps) {
  return (
    <Link href="/">
      <div className={`${textColor} font-bold text-3xl`}>
        <div className="flex items-center">
          <svg className="h-8 w-8 mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="currentColor" className="text-primary"/>
            <path d="M12 20H28M20 12V28" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <span>Mastery</span>
        </div>
      </div>
    </Link>
  );
}
