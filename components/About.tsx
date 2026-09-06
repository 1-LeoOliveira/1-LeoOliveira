import { site } from "@/data/site";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-mono text-accent">Sobre mim</h2>
      <div className="mt-4 grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          {site.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="border-l-2 border-accent/50 pl-4 text-sm text-foreground/60 italic">
            {site.objective}
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
            {site.skills.map((group) => (
              <div key={group.group}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                  {group.group}
                </h3>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
              Competências
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {site.competencies.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-black/5 px-3 py-1 text-xs text-foreground/70 dark:bg-white/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
