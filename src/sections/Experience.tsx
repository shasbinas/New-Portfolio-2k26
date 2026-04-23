import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-border group"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-border group-hover:bg-primary transition-colors border-4 border-background" />
              <div className="mb-1 text-sm font-bold text-primary uppercase tracking-widest">
                {exp.period}
              </div>
              <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
              <div className="text-lg font-medium text-muted-foreground mb-4">
                {exp.company}
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
