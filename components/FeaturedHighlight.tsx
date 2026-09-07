import Image from "next/image";
import { featuredSystems } from "@/data/projects";

export default function FeaturedHighlight() {
  return (
    <section id="destaque" className="border-y border-black/5 bg-black/[.02] dark:border-white/10 dark:bg-white/[.03]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-mono text-accent">Em destaque</h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Aero Star</h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-foreground/70">
          O projeto mais completo que desenvolvi: uma plataforma de atendimento e
          operação para um terminal de aviação executiva, cobrindo o fluxo inteiro —
          da chegada da aeronave no pátio até o faturamento mensal do cliente. O
          sistema tem painéis dedicados para cada papel da operação (recepção,
          coordenação, rampa, financeiro e administração) e, do lado do piloto, um
          dashboard próprio com assinatura digital das inspeções. Construir os dois
          lados juntos significou desenhar uma API e um modelo de dados únicos,
          rodando em Cloudflare Workers com banco D1, capazes de atender tanto os
          painéis internos quanto o app do piloto em tempo real.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredSystems.map((project) => (
            <div
              key={project.slug}
              className="overflow-hidden rounded-2xl border border-black/10 bg-background dark:border-white/10"
            >
              {project.image && (
                <div className="relative aspect-[3/2] w-full bg-[#0d1526]">
                  <Image
                    src={project.image}
                    alt={`Mockup ilustrativo — ${project.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  {project.status && (
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-foreground/60">{project.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-foreground/70 dark:border-white/15"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
