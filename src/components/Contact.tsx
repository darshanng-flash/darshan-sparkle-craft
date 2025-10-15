import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram, Download, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "darshan@example.com",
      link: "mailto:darshan@example.com",
      primary: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/darshang",
      primary: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@darshang",
      link: "https://github.com/darshang",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@darshang",
      link: "https://instagram.com/darshang",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project or collaboration in mind? I'm open to freelance work, internships, and exciting opportunities
            </p>
          </div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-lg border-primary/20 card-glow text-center">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span className="text-accent font-medium">Available Now</span>
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  Open to projects, part-time work, and collaborations
                </p>
                <p className="text-muted-foreground">
                  Let's build something interactive and impactful together
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card
                    className={`p-6 bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/50 transition-all cursor-pointer group ${
                      method.primary ? "card-glow" : ""
                    }`}
                    onClick={() => window.open(method.link, "_blank")}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{method.label}</div>
                        <div className="text-sm text-muted-foreground">{method.value}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
              onClick={() => window.open("mailto:darshan@example.com", "_blank")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center text-muted-foreground"
          >
            <p className="text-sm">
              Based in India • Open to remote opportunities worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
