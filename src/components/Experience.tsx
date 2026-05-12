import { motion } from "framer-motion";

const roles = [
  {
    period: "2025 — Present",
    title: "Hacathon project",
    org: "Amity University, Gwalior",
    detail:
      "A hackathon project that allows users to find rideshare matches based on their location and preferences.",
  },
  {
    period: "2025 — Present",
    title: "Portfolio website",
    org: "Amity University, Gwalior",
    detail:
      "A portfolio website that showcases my projects and skills.",
  }
];

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/[0.06] bg-surface-raised/30 px-4 py-24 sm:px-6 lg:px-8"
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
            Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Where I&apos;ve grown
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            My experience in hackathons and portfolio website development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-white/20 to-transparent md:left-3" />

          <ul className="space-y-10">
            {roles.map((role, i) => (
              <motion.li
                key={role.title + role.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center md:h-6 md:w-6">
                  <motion.span
                    className="h-3 w-3 rounded-full border-2 border-accent bg-surface shadow-[0_0_12px_rgba(34,211,238,0.5)] md:h-3.5 md:w-3.5"
                    whileInView={{ scale: [0.6, 1] }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  />
                </div>
                <div className="flex-1 rounded-2xl border border-white/[0.06] bg-surface/80 p-6 backdrop-blur-sm transition-colors hover:border-white/[0.1]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {role.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {role.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{role.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {role.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
