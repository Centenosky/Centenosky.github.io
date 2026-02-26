"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "SaaS de Citas",
    description:
      "Plataforma completa de reservaciones con pagos integrados, panel de administraci\u00f3n y notificaciones autom\u00e1ticas.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    span: "lg:col-span-2",
  },
  {
    title: "BarcodeScanner",
    description:
      "App m\u00f3vil nativa para escaneo y gesti\u00f3n de inventario en tiempo real con sincronizaci\u00f3n en la nube.",
    tags: ["Swift", "Firebase", "CoreML"],
    span: "lg:col-span-1",
  },
  {
    title: "Panel para Restaurantes",
    description:
      "Dashboard de gesti\u00f3n integral: men\u00fa digital, pedidos en tiempo real, anal\u00edticas de venta y control de inventario.",
    tags: ["React", "Node.js", "Socket.io"],
    span: "lg:col-span-1",
  },
  {
    title: "Agente de Ventas IA",
    description:
      "Chatbot conversacional entrenado con datos del negocio que cierra ventas por WhatsApp y web autom\u00e1ticamente.",
    tags: ["OpenAI", "Python", "WhatsApp API"],
    span: "lg:col-span-2",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function Projects() {
  return (
    <section id="proyectos" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            {"Proyectos"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Trabajo que habla por s\u00ed mismo"}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {"Cada proyecto es una soluci\u00f3n dise\u00f1ada para resolver problemas reales de negocio."}
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 ${project.span}`}
            >
              {/* Subtle top accent */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.65 0.2 250 / 0.5), transparent)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
