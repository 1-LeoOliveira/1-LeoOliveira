import { featuredSystems } from "@/data/projects";

export default function FeaturedHighlight() {
  return (
    <section id="destaque" className="border-y border-black/5 bg-black/[.02] dark:border-white/10 dark:bg-white/[.03]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-mono text-accent">Em destaque</h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Flight Manager &amp; FM Pilot
        </h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-foreground/70">
          Um dos projetos mais completos que desenvolvi foi pensar em dois sistemas
          conectados para operação de voos, cada um resolvendo um problema diferente:
          o <strong>Flight Manager</strong> centraliza a gestão — aeronaves, tripulação,
          escalas e manutenção — enquanto o <strong>FM Pilot</strong> leva essa mesma
          base de dados para quem está em campo, com acesso rápido ao plano de voo e à
          escala do dia. Construir os dois juntos significou desenhar uma API e um
          modelo de dados únicos capazes de atender tanto o painel administrativo
          quanto a aplicação do piloto, mantendo as informações sempre em sincronia.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredSystems.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl border border-black/10 bg-background p-6 dark:border-white/10"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
