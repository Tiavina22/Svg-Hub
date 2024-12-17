import { Logo } from "@/lib/types";
import { LogoCard } from "./LogoCard";

interface LogoGridProps {
  logos: Logo[];
}

export const LogoGrid = ({ logos }: LogoGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {logos.map((logo) => (
          <LogoCard key={logo.id} logo={logo} />
        ))}
      </div>
    </div>
  );
};