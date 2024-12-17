import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogoCategory } from "@/lib/types";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-wrap gap-2 justify-center my-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => onSelectCategory(null)}
          className={
            selectedCategory === null
              ? "bg-blue-600 hover:bg-blue-700"
              : "border-gray-700 text-gray-300 hover:bg-gray-800"
          }
        >
          {t("allCategories")}
        </Button>
      </motion.div>
      {categories.map((category) => (
        <motion.div
          key={category}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onSelectCategory(category)}
            className={
              selectedCategory === category
                ? "bg-blue-600 hover:bg-blue-700"
                : "border-gray-700 text-gray-300 hover:bg-gray-800"
            }
          >
            {t(`filtres.${category}`)}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};