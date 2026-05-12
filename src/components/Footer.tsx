import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Sachin Kushwah. Built with React &amp; Tailwind.
        </p>
        <motion.a
          href="#top"
          className="text-sm font-medium text-zinc-400 transition hover:text-accent"
          whileHover={{ y: -2 }}
        >
          Back to top ↑
        </motion.a>
      </div>
    </footer>
  );
}
