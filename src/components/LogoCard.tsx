import { motion } from "framer-motion";
import { Logo } from "@/lib/types";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface LogoCardProps {
  logo: Logo;
}

export const LogoCard = ({ logo }: LogoCardProps) => {
  const [selectedFormat, setSelectedFormat] = useState<string>("svg");

  const handleDownload = () => {
    if (selectedFormat === "svg") {
      const blob = new Blob([logo.svg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      downloadFile(url, `${logo.name.toLowerCase()}.svg`);
    } else if (selectedFormat === "png") {
      // Convert SVG to PNG (you can use a library like `html-to-image` or `dom-to-image`)
      // For simplicity, let's assume you have a function `convertSvgToPng` that does this
      convertSvgToPng(logo.svg).then((pngBlob) => {
        const url = URL.createObjectURL(pngBlob);
        downloadFile(url, `${logo.name.toLowerCase()}.png`);
      });
    } else {
      toast.error("Format non pris en charge");
    }
  };

  const downloadFile = (url: string, filename: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Logo ${logo.name} téléchargé en format ${selectedFormat} !`);
  };

  const convertSvgToPng = (svg: string): Promise<Blob> => {
    // This is a placeholder for the actual conversion logic
    // You can use libraries like `html-to-image` or `dom-to-image` to implement this
    return new Promise((resolve) => {
      const svgNode = new DOMParser().parseFromString(svg, "image/svg+xml").documentElement;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          resolve(blob as Blob);
        }, "image/png");
      };

      img.src = "data:image/svg+xml;base64," + btoa(new XMLSerializer().serializeToString(svgNode));
    });
  };

  return (
    <motion.div
      className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Bouton de téléchargement en haut à droite avec z-index 1 */}
      <motion.button
        onClick={handleDownload}
        className="absolute top-3 right-3 p-2 bg-blue-600/90 text-white rounded-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 z-10"
      >
        <Download className="h-4 w-4" />
      </motion.button>

      {/* Logo SVG avec z-index 0 */}
      <div
        className="w-24 h-24 mx-auto mb-4 p-4 bg-gray-900/50 rounded-lg transform transition-transform duration-300 group-hover:scale-110 z-0"
        dangerouslySetInnerHTML={{ __html: logo.svg }}
      />

      {/* Informations du logo */}
      <div className="text-center">
        <h3 className="font-medium text-white mb-1">{logo.name}</h3>
        <p className="text-sm text-gray-400 mb-2">{logo.category}</p>

        {/* Sélecteur de format */}
        <div className="flex justify-center items-center space-x-2">
          <select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="p-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="svg">SVG</option>
            <option value="png">PNG</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
};