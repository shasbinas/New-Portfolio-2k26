import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";

export const Stats = () => {
  const githubUsername = PERSONAL_INFO.github.split("/").pop();
  const leetcodeUsername = PERSONAL_INFO.leetcode.split("/").pop();

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Coding Statistics</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              GitHub Stats
            </h3>
            <div className="rounded-3xl border border-border p-4 bg-background shadow-xl hover:shadow-primary/5 transition-all overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=var(--primary)&text_color=var(--foreground)&icon_color=var(--primary)`}
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-3xl border border-border p-4 bg-background shadow-xl hover:shadow-primary/5 transition-all overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&stroke=var(--primary)&ring=var(--primary)&fire=var(--primary)&currStreakLabel=var(--foreground)&sideNums=var(--foreground)&sideLabels=var(--foreground)&dates=var(--muted-foreground)`}
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              LeetCode Stats
            </h3>
            <div className="rounded-3xl border border-border p-6 bg-background shadow-xl hover:shadow-primary/5 transition-all min-h-[300px] flex items-center justify-center">
              <img
                src={`https://leetcode-stats-six.vercel.app/api?username=${leetcodeUsername}&theme=light`}
                alt="LeetCode Stats"
                className="w-full h-auto dark:hidden"
              />
               <img
                src={`https://leetcode-stats-six.vercel.app/api?username=${leetcodeUsername}&theme=dark`}
                alt="LeetCode Stats"
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
