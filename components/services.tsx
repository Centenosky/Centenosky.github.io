"use client"

import { motion } from "framer-motion"
import { Globe, Brain, MessageSquare, TrendingUp, Headphones } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "P\u00e1ginas Web & Apps",
    description:
      "Sitios web de alto rendimiento y aplicaciones m\u00f3viles nativas con tecnolog\u00eda de punta.",
  },
  {
    icon: Brain,
    title: "Desarrollo de IA",
    description:
      "Modelos personalizados e integraciones con OpenAI, LLMs y visi\u00f3n por computadora.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots Automatizados",
    description:
      "Chatbots inteligentes que atienden, califican y convierten leads autom\u00e1ticamente.",
  },
  {
    icon: TrendingUp,
    title: "Agentes de Venta 24/7",
    description:
      "Agentes de IA que venden por ti mientras duermes. Sin descansos, sin l\u00edmites.",
  },
  {
    icon: Headphones,
    title: "Secretarias Virtuales con IA",
    description:
      "Asistentes virtuales que gestionan citas, responden llamadas y organizan tu agenda.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function Services() {
  return (
    <section id="servicios" className="relative px-6 py-28">
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
            {"Servicios"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Soluciones que transforman negocios"}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {"Combino desarrollo web, inteligencia artificial y automatizaci\u00f3n para crear herramientas que generan resultados reales."}
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at 50% 50%, oklch(0.65 0.2 250 / 0.05), transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
