import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import VaporText from "./VaporText";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Animated Name with Vapor Effect */}
          <VaporText 
            text="Darshan N G" 
            className="text-6xl md:text-8xl font-bold text-gradient"
          />

          {/* Role */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineering Student | Information Science and Technology
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building interactive web experiences with React/Next.js, 3D graphics, and cybersecurity concepts
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 group"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("mailto:darshan@example.com", "_blank")}
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://github.com/darshang", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://linkedin.com/in/darshang", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://instagram.com/darshang", "_blank")}
            >
              <Instagram className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Floating indicator */}
          <motion.div
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-glow-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
