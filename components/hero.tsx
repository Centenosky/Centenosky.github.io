"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.65 0.2 250) 1px, transparent 1px),
                           linear-gradient(90deg, oklch(0.65 0.2 250) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, oklch(0.07 0 0) 100%)",
        }}
      />
      {/* Glow spot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.2 250 / 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <GridBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            {"Disponible para nuevos proyectos"}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">{"Construyo el futuro"}</span>
          <br />
          <span className="text-foreground">{"de tu negocio "}</span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.65 0.2 250), oklch(0.72 0.19 220))",
            }}
          >
            {"con IA"}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {"Desarrollo web, apps m\u00f3viles e inteligencia artificial. Automatizo procesos para que tu empresa venda m\u00e1s, 24/7."}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            {/* Glow behind button */}
            <span
              className="pointer-events-none absolute inset-0 -z-10 animate-glow-pulse rounded-lg blur-xl"
              style={{ background: "oklch(0.65 0.2 250 / 0.4)" }}
            />
            {"Empecemos tu proyecto"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/30 px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-secondary/60"
          >
            {"Ver proyectos"}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex items-center justify-center gap-12 sm:gap-16"
        >
          {[
            { value: "+50", label: "Proyectos" },
            { value: "+3", label: "A\u00f1os exp." },
            { value: "24/7", label: "Automatizaci\u00f3n" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
