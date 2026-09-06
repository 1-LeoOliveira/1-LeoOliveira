import { site } from "@/data/site";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <section id="contato" className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-sm font-mono text-accent">Contato</h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Vamos conversar sobre o seu próximo projeto?
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Estou aberto a novas oportunidades como Desenvolvedor Full Stack e a
          projetos freelance. Manda uma mensagem.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {site.email}
        </a>
        <p className="mt-4 text-sm text-foreground/60">
          {site.phone} · {site.location}
        </p>
        <SocialLinks className="mt-8 justify-center" />
      </div>
    </section>
  );
}
