import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["HTML", "Python", "Java", "C", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS"],
  },
  {
    category: "Backend & data",
    items: ["Node.jsMySQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git","GitHub","Leet Code","Hackerrank"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 22 },
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-white/[0.06] bg-surface-raised/50 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Skills
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Stack I ship with
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Always learning — currently deepening my systems design and testing
            toolkit.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-6 shadow-lg shadow-black/20"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative text-sm font-semibold uppercase tracking-wide text-zinc-500">
                {group.category}
              </h3>
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors group-hover:border-accent/20 group-hover:text-white">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
