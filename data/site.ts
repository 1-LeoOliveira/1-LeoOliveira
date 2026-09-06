export const site = {
  name: "Leo Oliveira",
  role: "Desenvolvedor Full Stack Júnior",
  location: "Brasil",
  tagline:
    "Construo sistemas web completos — do banco de dados à interface — com foco em resolver problemas reais de negócio.",
  bio: [
    "Sou desenvolvedor júnior e já coloquei no ar sistemas completos: APIs com autenticação e banco de dados, dashboards com gráficos e importação de planilhas, e aplicações de pedidos integradas ao WhatsApp.",
    "Meu foco atual é o ecossistema JavaScript/TypeScript — Next.js, React e Node.js — combinado com Python para automações e análise de dados. Gosto de projetos que saem do zero e viram produto: modelar o banco, construir a API e entregar uma interface que alguém realmente usa.",
  ],
  email: "leoo2771@gmail.com",
  socials: {
    github: "https://github.com/1-LeoOliveira",
    linkedin: "https://www.linkedin.com/in/leonardo-oliveira-54969417b",
    instagram: "https://www.instagram.com/01_LeoOliveira/",
  },
  skills: [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
    { group: "Backend", items: ["Node.js", "Express", "Python", "APIs REST"] },
    { group: "Dados", items: ["PostgreSQL", "Prisma", "Supabase", "Cloudflare D1"] },
    { group: "Ferramentas", items: ["Git & GitHub", "Vercel", "Docker (básico)", "Vitest"] },
  ],
} as const;
