"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle, Mail, ArrowUpRight } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contacto" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            {"Contacto"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Hagamos realidad tu idea"}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {"Cu\u00e9ntame sobre tu proyecto y te responder\u00e9 en menos de 24 horas."}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {"Nombre"}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {"Email"}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {"Mensaje"}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                placeholder="Cu\u00e9ntame sobre tu proyecto..."
                className="w-full resize-none rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
            >
              {submitted ? "Enviado" : "Enviar mensaje"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <a
              href="https://wa.me/5200000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-5 transition-all hover:border-primary/30 hover:bg-card/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground">
                  {"WhatsApp"}
                </span>
                <p className="text-xs text-muted-foreground">
                  {"Respuesta inmediata"}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary" />
            </a>

            <a
              href="mailto:hola@diegocenteno.dev"
              className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-5 transition-all hover:border-primary/30 hover:bg-card/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground">
                  {"Email"}
                </span>
                <p className="text-xs text-muted-foreground">
                  {"hola@diegocenteno.dev"}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary" />
            </a>

            <div className="mt-auto rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-medium text-foreground">
                {"Agenda una llamada gratis"}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {"30 minutos para analizar tu proyecto y darte una propuesta personalizada sin compromiso."}
              </p>
              <a
                href="#contacto"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:brightness-110"
              >
                {"Reservar ahora"}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
