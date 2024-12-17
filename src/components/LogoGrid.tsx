import { motion } from "framer-motion";
import { Logo } from "@/lib/types";
import { LogoCard } from "./LogoCard";

interface LogoGridProps {
  logos: Logo[];
}

export const LogoGrid = ({ logos }: LogoGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
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
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <LogoCard logo={logo} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};