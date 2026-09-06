import { site } from "@/data/site";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="mb-4 font-mono text-sm text-accent">Olá, eu sou</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{site.name}</h1>
      <h2 className="mt-2 text-2xl font-semibold text-foreground/60 sm:text-3xl">{site.role}</h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">{site.tagline}</p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projetos"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Ver projetos
        </a>
        <a
          href="#contato"
          className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent dark:border-white/15"
        >
          Entrar em contato
        </a>
      </div>

      <SocialLinks className="mt-10" />
    </section>
  );
}
