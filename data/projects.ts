export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo?: string;
  link?: string;
  status?: string;
};

// Os dois sistemas em destaque na home. Textos em modo rascunho —
// ajuste com os detalhes reais (link do repositório, prints, métricas)
// assim que tiver os repositórios do Flight Manager / FM Pilot à mão.
export const featuredSystems: Project[] = [
  {
    slug: "flight-manager",
    name: "Flight Manager",
    tagline: "Painel de gestão de operações de voo",
    description:
      "Sistema web para centralizar a operação de voos: cadastro de aeronaves e tripulação, montagem de escalas, acompanhamento de manutenção e relatórios operacionais em um único painel para quem administra a operação.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    status: "Em desenvolvimento",
  },
  {
    slug: "fm-pilot",
    name: "FM Pilot",
    tagline: "Aplicação complementar para o piloto",
    description:
      "Aplicação irmã do Flight Manager, pensada para o dia a dia de quem está em campo: acesso rápido ao plano de voo, checklists e status da escala, consumindo a mesma base de dados da operação em tempo real.",
    stack: ["Next.js", "TypeScript", "API REST"],
    status: "Em desenvolvimento",
  },
];

export const projects: Project[] = [
  {
    slug: "followtrack",
    name: "FollowTrack",
    tagline: "API + dashboard de monitoramento de seguidores",
    description:
      "API que cadastra perfis e acompanha a evolução do número de seguidores automaticamente a cada 24h, guardando o histórico em Postgres. Inclui dashboard com busca, ordenação, mini-gráficos de tendência, comparação entre perfis e exportação em CSV.",
    stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Vitest"],
    repo: "https://github.com/1-LeoOliveira/FollowTrack",
  },
  {
    slug: "sistema-de-pedidos",
    name: "Sistema de Pedidos",
    tagline: "Cardápio digital com checkout via WhatsApp",
    description:
      "Sistema para restaurantes e lanchonetes: cardápio digital por categorias, carrinho de compras com opções por item, cálculo automático de taxa de entrega e finalização do pedido direto no WhatsApp do estabelecimento — sem taxas de intermediários como iFood.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    repo: "https://github.com/1-LeoOliveira/app",
  },
  {
    slug: "analise-reposicao",
    name: "Análise de Reposição",
    tagline: "Dashboard de análise de dados com importação de planilhas",
    description:
      "Painel que importa planilhas Excel e transforma os dados em gráficos interativos, facilitando a leitura de indicadores de reposição/estoque sem depender de fórmulas manuais.",
    stack: ["Next.js", "React", "Chart.js", "xlsx"],
    repo: "https://github.com/1-LeoOliveira/Analise-Reposicao",
  },
  {
    slug: "gzox",
    name: "Gzox",
    tagline: "Painel de busca e visualização de dados",
    description:
      "Aplicação Next.js com foco em busca e apresentação de dados em gráficos, usando Recharts para as visualizações.",
    stack: ["Next.js", "React", "Recharts", "TypeScript"],
    repo: "https://github.com/1-LeoOliveira/Gzox",
  },
  {
    slug: "onetwothree",
    name: "OneTwoThree English School",
    tagline: "Plataforma de gestão para escola de inglês",
    description:
      "Aplicação para uma escola de idiomas, cobrindo autenticação de usuários e persistência de dados dos alunos.",
    stack: ["Cloudflare D1", "SQL"],
    link: "https://onetwothree.mocha.app",
  },
];
