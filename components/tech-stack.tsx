"use client"

import { motion } from "framer-motion"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Swift",
  "OpenAI",
  "LangChain",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Vercel",
  "Stripe",
  "Supabase",
]

export function TechStack() {
  return (
    <section id="stack" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            {"Stack Tecnol\u00f3gico"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Herramientas que domino"}
          </h2>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{
            background: "linear-gradient(to right, oklch(0.07 0 0), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{
            background: "linear-gradient(to left, oklch(0.07 0 0), transparent)",
          }}
        />

        {/* First row */}
        <div className="mb-4 flex animate-marquee w-max gap-4">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 rounded-lg border border-border/40 bg-card/30 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Second row - reverse */}
        <div
          className="flex animate-marquee w-max gap-4"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map(
            (tech, index) => (
              <div
                key={`rev-${tech}-${index}`}
                className="flex-shrink-0 rounded-lg border border-border/40 bg-card/30 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
