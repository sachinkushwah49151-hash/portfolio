import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com", handle: "@yourusername" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sachin-kushwah-89666b371", handle: "Sachin Kushwah" },
  { label: "Email", href: "mailto:sachinkushwah49151@gmail.com", handle: "sachinkushwah49151@gmail.com" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3200);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
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
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Whether it&apos;s a research collaboration, open source, or an
            internship — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="text-sm font-medium text-zinc-500">Elsewhere</p>
            <ul className="mt-6 space-y-4">
              {socials.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-surface-raised px-4 py-3 transition hover:border-accent/30 hover:bg-white/[0.03]"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-white group-hover:text-accent">
                        {s.label}
                      </span>
                      <span className="text-xs text-zinc-500">{s.handle}</span>
                    </span>
                    <svg
                      className="h-4 w-4 text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-raised p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/[0.08] bg-surface px-4 py-3 text-sm text-white outline-none ring-accent/40 transition placeholder:text-zinc-600 focus:border-accent/40 focus:ring-2"
                  />
                </label>
                <label className="sm:col-span-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Email
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@university.edu"
                    className="w-full rounded-xl border border-white/[0.08] bg-surface px-4 py-3 text-sm text-white outline-none ring-accent/40 transition placeholder:text-zinc-600 focus:border-accent/40 focus:ring-2"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project or opportunity…"
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-surface px-4 py-3 text-sm text-white outline-none ring-accent/40 transition placeholder:text-zinc-600 focus:border-accent/40 focus:ring-2"
                  />
                </label>
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-4">
                <motion.button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-surface shadow-lg shadow-glow transition hover:brightness-110"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send message
                </motion.button>
                <p className="text-xs text-zinc-500">
                  Demo form — wire to Formspree, Resend, or your API.
                </p>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface/90 backdrop-blur-sm"
                  >
                    <p className="font-display text-lg font-semibold text-white">
                      Thanks — message noted (demo).
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
