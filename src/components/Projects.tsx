import { motion } from "framer-motion";

const projects = [
  {
    title: "Hacathon project",
    description:
      "A hackathon project that allows users to find rideshare matches based on their location and preferences.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-cyan-500/30 via-surface to-violet-600/25",
    links: { demo: "#", code: "#" },
  },
  {
    title: "Portfolio website",
    description:
      "A portfolio website that showcases my projects and skills.",
    tags: ["TypeScript", "Canvas API", "Vite"],
    gradient: "from-violet-500/30 via-surface to-cyan-600/20",
    links: { demo: "#", code: "#" },
  }
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Projects
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              A mix of hackathon builds, and side experiments.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-raised"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-black/40 px-2 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.links.demo}
                    className="text-sm font-semibold text-accent transition hover:text-cyan-200"
                  >
                    Live demo →
                  </a>
                  <a
                    href={project.links.code}
                    className="text-sm font-semibold text-zinc-500 transition hover:text-zinc-300"
                  >
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
