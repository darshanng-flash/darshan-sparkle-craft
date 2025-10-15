import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            DN
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                  Projects
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-lg border-border">
                <DropdownMenuItem onClick={() => scrollToSection("projects")}>
                  All Projects
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("projects")}>
                  3D Portfolio
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("projects")}>
                  CyberGuard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("projects")}>
                  Academic Work
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>

            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              Resume
            </Button>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-in">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              variant="default"
              size="sm"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Download Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
