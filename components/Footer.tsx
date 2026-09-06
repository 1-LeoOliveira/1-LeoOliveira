import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-xs text-foreground/50">
      © {new Date().getFullYear()} {site.name}. Construído com Next.js e TailwindCSS.
    </footer>
  );
}
