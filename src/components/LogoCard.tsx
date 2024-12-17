import { motion } from "framer-motion";
import { Logo } from "@/lib/types";
import { Download } from "lucide-react";
import { toast } from "sonner";

interface LogoCardProps {
  logo: Logo;
}

export const LogoCard = ({ logo }: LogoCardProps) => {
  const handleDownload = () => {
    const blob = new Blob([logo.svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${logo.name.toLowerCase()}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Logo ${logo.name} téléchargé !`);
  };

  return (
    <motion.div
      className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-24 h-24 mx-auto mb-4 p-4 bg-gray-900/50 rounded-lg transform transition-transform duration-300 group-hover:scale-110"
        dangerouslySetInnerHTML={{ __html: logo.svg }}
      />
      <div className="text-center">
        <h3 className="font-medium text-white mb-1">{logo.name}</h3>
        <p className="text-sm text-gray-400">{logo.category}</p>
      </div>
      <motion.button
        onClick={handleDownload}
        className="absolute top-3 right-3 p-2 bg-blue-600/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 hover:scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Download className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};