import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      color: "primary",
    },
    {
      title: "3D & Graphics",
      skills: ["Three.js", "React Three Fiber", "@react-three/drei", "WebGL", "GLSL"],
      color: "accent",
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "REST APIs", "Authentication"],
      color: "primary",
    },
    {
      title: "Cybersecurity",
      skills: ["Red Team", "Blue Team", "Adversarial ML", "Security Simulations", "Penetration Testing"],
      color: "accent",
    },
    {
      title: "Tools & DevOps",
      skills: ["Git/GitHub", "Vercel", "AWS", "EmailJS", "Module Resolution", "Package Management"],
      color: "primary",
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Documentation", "Teamwork", "Problem Solving", "Time Management"],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/50 transition-all h-full">
                  <h3 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/20 inline-block">
              <p className="text-muted-foreground">
                Always learning and exploring new technologies to stay at the forefront of web development
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
