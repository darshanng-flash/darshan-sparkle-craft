import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Shield } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building modern, responsive web applications with React, Next.js, and TypeScript",
    },
    {
      icon: Palette,
      title: "3D & Animation",
      description: "Creating immersive experiences with Three.js, React Three Fiber, and Framer Motion",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Developing training platforms and simulations for red vs blue team scenarios",
    },
  ];

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate software engineering student dedicated to crafting exceptional digital experiences
            </p>
          </div>

          {/* Bio */}
          <Card className="p-8 bg-card/50 backdrop-blur-lg border-primary/20 card-glow">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a software engineering student focused on building interactive, polished web experiences, 
              combining React/Next.js with 3D animations and cybersecurity learning tools. I actively ship 
              academic and personal projects while optimizing performance and user experience. My journey 
              involves continuous learning, from mastering modern web frameworks to exploring the fascinating 
              world of 3D graphics and security concepts.
            </p>
          </Card>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/50 transition-all hover:card-glow group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects Built", value: "15+" },
              { label: "Technologies", value: "20+" },
              { label: "Experience", value: "2+ Years" },
              { label: "Open Source", value: "Active" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
