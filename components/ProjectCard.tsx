import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.link ?? project.repo;

  const card = (
    <div className="flex h-full flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-accent dark:border-white/10">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-foreground/60">{project.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-black/5 px-3 py-1 text-xs text-foreground/70 dark:bg-white/10"
          >
            {tech}
          </li>
        ))}
      </ul>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
          {project.repo ? "Ver repositório" : "Ver projeto"} →
        </span>
      )}
    </div>
  );

  if (!href) return card;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {card}
    </a>
  );
}
