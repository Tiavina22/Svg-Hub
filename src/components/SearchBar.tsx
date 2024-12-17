import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder="Rechercher un logo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 w-full bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
      />
    </div>
  );
};