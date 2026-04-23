import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-secondary/5 border border-border flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="mb-2 text-sm font-bold text-primary uppercase tracking-widest">
                  {edu.period}
                </div>
                <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                <div className="text-lg font-medium text-muted-foreground mb-4">
                  {edu.school}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
