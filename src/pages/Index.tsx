import { useEffect, useState } from "react";
import Background3D from "@/components/Background3D";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-background/50 backdrop-blur-lg">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Darshan N G. Built with React, Three.js, and passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
