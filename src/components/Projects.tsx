import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "3D Animated Portfolio Website",
      description:
        "Built with Next.js, React, and Tailwind CSS featuring custom animated sections, cursor and background VFX, EmailJS contact integration, and deployed on Vercel. Showcases advanced 3D animations and smooth user interactions.",
      technologies: ["Next.js", "React", "Tailwind", "Three.js", "Framer Motion", "EmailJS"],
      github: "https://github.com/darshanng-flash/3d-Portfolio",
      live: "https://3d-portfolio-br7x.vercel.app",
      featured: true,
    },
    {
      title: "CyberGuard Training Platform",
      description:
        "Interactive cybersecurity training platform featuring red team vs blue team scenarios, AI agent integration for dynamic challenges, authentication system, and AWS hosting guidance. Helps students learn security concepts through hands-on simulations.",
      technologies: ["React", "Node.js", "MongoDB", "AI Integration", "AWS"],
      github: "https://github.com/darshanng-flash/CyberSec",
      live: "https://cyberguard.example.com",
      featured: true,
    },
    {
      title: "Academic & Technical Documentation",
      description:
        "Comprehensive collection of seminar writeups, scholarship essays, and technical documentation covering various topics in software engineering, cybersecurity, and web development. Demonstrates strong communication and documentation skills.",
      technologies: ["Markdown", "LaTeX", "Technical Writing", "Research"],
      github: "https://github.com/darshang/academic-work",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built 5+ projects showcasing interactive web experiences, 3D animations, and cybersecurity tools
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 2000 }}
              >
                <Card
                  className={`p-6 md:p-8 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 theme-matched-card ${
                    project.featured ? "card-glow" : ""
                  }`}
                >
                  <div className="space-y-4">
                    {/* Title and Featured Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      {project.featured && (
                        <Badge className="bg-primary/20 text-primary border-primary/50">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Links */}
                    <motion.div 
                      className="flex gap-3 pt-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    >
                      {project.github && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/50 hover:bg-primary/10"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </motion.div>
                      )}
                      {project.live && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-8"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => window.open("https://github.com/darshanng-flash?tab=repositories", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
