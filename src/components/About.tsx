import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Shield, Globe } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

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

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Three.js", icon: "🎲" },
    { name: "Node.js", icon: "🟢" },
  ];

  const languages = [
    { 
      name: "English", 
      proficiency: "Fluent",
      icon: "🇬🇧"
    },
    { 
      name: "Hindi", 
      proficiency: "Native",
      icon: "🇮🇳"
    },
    { 
      name: "Kannada", 
      proficiency: "Native",
      icon: "🇮🇳"
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
          <div className="text-center space-y-6">
            {/* Profile Photo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-glow-pulse" />
                <img
                  src={profileImage}
                  alt="Darshan N G"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/50 shadow-lg group-hover:scale-105 transition-transform"
                />
              </div>
            </motion.div>
            
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
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10, 
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ perspective: 1000 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/50 transition-all hover:card-glow group hover:shadow-2xl hover:shadow-primary/20 theme-matched-card">
                    <div className="space-y-4">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Compact Skills Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="overflow-hidden"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Skills</h3>
            <div className="flex items-center justify-center gap-4 flex-wrap relative px-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20"
                >
                  <span className="text-2xl" aria-hidden="true">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Languages Known */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Languages Known</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.9 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                  className="group"
                >
                  <Card className="p-6 bg-card/30 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] theme-matched-card">
                    <div className="space-y-4 text-center">
                      <motion.div 
                        className="text-5xl mx-auto language-icon"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                        aria-hidden="true"
                      >
                        {language.icon}
                      </motion.div>
                      <h4 className="text-xl font-semibold">{language.name}</h4>
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {language.proficiency}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects Built", value: "5+" },
              { label: "Technologies", value: "20+" },
              { label: "Experience", value: "2+ Years" },
              { label: "Open Source", value: "Active" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-center"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.3 + index * 0.1,
                    type: "spring",
                    bounce: 0.4
                  }}
                  className="text-3xl md:text-4xl font-bold text-gradient"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
