import { site } from "@/data/site";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-mono text-accent">Sobre mim</h2>
      <div className="mt-4 grid gap-12 sm:grid-cols-2">
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          {site.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}
