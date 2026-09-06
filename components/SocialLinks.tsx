import { site } from "@/data/site";

const items = [
  { key: "github", label: "GitHub", href: site.socials.github },
  { key: "linkedin", label: "LinkedIn", href: site.socials.linkedin },
  { key: "instagram", label: "Instagram", href: site.socials.instagram },
  { key: "email", label: "E-mail", href: `mailto:${site.email}` },
] as const;

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            target={item.key === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent dark:border-white/15"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
