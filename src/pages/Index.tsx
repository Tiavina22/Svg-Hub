import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { LogoGrid } from "@/components/LogoGrid";
import { logos } from "@/data/logos";
import { LogoCategory } from "@/lib/types";
import { ArrowRight, Sparkles, Download, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

import '../config/i18n';

const Index = () => {

  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<LogoCategory | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {

      i18n.changeLanguage(storedLanguage);
    }

      
     else {
      i18n.changeLanguage("fr");
    }
  }, [i18n]);


  const categories = Array.from(new Set(logos.map((logo) => logo.category)));
  
  const filteredLogos = logos.filter((logo) => {
    const matchesSearch = logo.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? logo.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const scrollToLogos = () => {
    const logosSection = document.querySelector<HTMLElement>("#logos-section");
    if (logosSection) {
      logosSection.scrollIntoView({ behavior: "smooth" });
      toast({
        title: t("welcomeToastTitle"),
        description: t("welcomeToastDescription"),
      });
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Langue switcher */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        <Button
          onClick={() => changeLanguage("fr")}
          className={`${
            i18n.language === "fr" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"
          } hover:bg-blue-700 transition-all duration-300`}
        >
          FR
        </Button>
        <Button
          onClick={() => changeLanguage("en")}
          className={`${
            i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"
          } hover:bg-blue-700 transition-all duration-300`}
        >
               <Button
          onClick={() => changeLanguage("chn")}
          className={`${
            i18n.language === "chn" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"
          } hover:bg-blue-700 transition-all duration-300`}
        ></Button>
          EN
        </Button>
      </div>

      {/* Hero Section avec animation améliorée */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-4 space-x-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-medium">{t("premiumCollection")}</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                onClick={scrollToLogos}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {t("startNow")} <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setShowDialog(true)}
                className="border-gray-700 text-gray-300 hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                {t("exploreCollection")} <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("svgFormat")}</h3>
              <p className="text-gray-400">{t("svgDescription")}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-purple-500/10 p-3 rounded-lg w-fit mb-4">
                <Download className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("simpleDownload")}</h3>
              <p className="text-gray-400">{t("downloadDescription")}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
              <div className="bg-pink-500/10 p-3 rounded-lg w-fit mb-4">
                <Sparkles className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("premiumCollection")}</h3>
              <p className="text-gray-400">{t("premiumDescription")}</p>
            </div>
          </div>
        </div>
        
        {/* Cercles décoratifs améliorés */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Main Content avec glassmorphism */}
      <div id="logos-section" className="container mx-auto px-4 py-16">
        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <LogoGrid logos={filteredLogos} />
        </div>
      </div>

      {/* Footer */}
      <footer className="backdrop-blur-sm p-8 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tiavina Ramilison.
        </p>
      </footer>

      {/* Dialog pour Explorer la collection */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-gray-800 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t("exploreDialogTitle")}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              <div className="space-y-4 mt-4">
                <p>
                  {t("exploreDialogDescription", { count: logos.length })}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">{t("availableFormats")}</h4>
                    <p>{t("formatsDescription")}</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">{t("categories")}</h4>
                    <p>{t("categoriesDescription")}</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-400 mb-2">{t("usage")}</h4>
                    <p>{t("usageDescription")}</p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;