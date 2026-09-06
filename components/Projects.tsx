import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-mono text-accent">Projetos</h2>
      <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Outros sistemas que construí</h3>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Além dos projetos acima, também desenvolvi sites sob medida para pequenos
        negócios e criadores de conteúdo, com foco em performance e um processo de
        entrega rápido.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
