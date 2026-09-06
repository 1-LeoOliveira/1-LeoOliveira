import { experience, certifications } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-mono text-accent">Experiência</h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Trajetória profissional
        </h3>

        <ol className="mt-10 space-y-8 border-l border-black/10 pl-6 dark:border-white/15">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-lg font-semibold">{job.role}</h4>
                <span className="text-sm text-foreground/50">{job.period}</span>
              </div>
              <p className="text-sm font-medium text-foreground/60">{job.company}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground/70">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-accent">–</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Certificações
          </h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-xl border border-black/10 p-4 text-sm dark:border-white/10"
              >
                <p className="font-medium">{cert.name}</p>
                <p className="mt-1 text-foreground/60">
                  {cert.issuer} · {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
