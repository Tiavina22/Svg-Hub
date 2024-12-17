import { Button } from "@/components/ui/button";
import { LogoCategory } from "@/lib/types";

interface CategoryFilterProps {
  categories: LogoCategory[];
  selectedCategory: LogoCategory | null;
  onSelectCategory: (category: LogoCategory | null) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-6">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onSelectCategory(null)}
        className={selectedCategory === null ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
      >
        Tous
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};