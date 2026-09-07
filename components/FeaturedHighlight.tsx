import Image from "next/image";
import { featuredSystems } from "@/data/projects";

export default function FeaturedHighlight() {
  return (
    <section id="destaque" className="border-y border-black/5 bg-black/[.02] dark:border-white/10 dark:bg-white/[.03]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-mono text-accent">Em destaque</h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Sistemas para aviação
        </h3>

        <div className="mt-10 space-y-16">
          {featuredSystems.map((group) => (
            <div key={group.slug}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="text-xl font-bold tracking-tight">{group.name}</h4>
                {group.link && (
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    {group.link.replace(/^https?:\/\//, "")} ↗
                  </a>
                )}
              </div>
              <p className="mt-1 text-sm font-medium text-foreground/60">{group.tagline}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-foreground/70">
                {group.description}
              </p>

              {group.image && (
                <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#0d1526] dark:border-white/10 sm:aspect-[2/1]">
                  <Image
                    src={group.image}
                    alt={`Captura de tela — ${group.name}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              )}

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {group.cards.map((project) => (
                  <div
                    key={project.slug}
                    className="overflow-hidden rounded-2xl border border-black/10 bg-background dark:border-white/10"
                  >
                    {project.image && (
                      <div className="relative aspect-video w-full bg-[#0d1526]">
                        <Image
                          src={project.image}
                          alt={`Captura de tela — ${project.name}`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h5 className="text-lg font-semibold">{project.name}</h5>
                        {project.status && (
                          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-foreground/60">
                        {project.tagline}
                      </p>
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
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                        >
                          Ver site →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
