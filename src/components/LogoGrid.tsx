import { Logo } from "@/lib/types";
import { LogoCard } from "./LogoCard";

interface LogoGridProps {
  logos: Logo[];
}

export const LogoGrid = ({ logos }: LogoGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 sm:gap-6 sm:p-6 place-items-center sm:place-items-start">
      {logos.map((logo) => (
        <LogoCard key={logo.id} logo={logo} />
      ))}
    </div>
  );
};