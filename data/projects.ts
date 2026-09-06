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

// Aero Star: sistema de atendimento e operação para um terminal de aviação
// executiva (FBO). É o mesmo projeto referido anteriormente como
// "Flight Manager" (painéis operacionais) e "FM Pilot" (app do piloto).
export const featuredSystems: Project[] = [
  {
    slug: "aero-star-operacional",
    name: "Aero Star — Painéis Operacionais",
    tagline: "Recepção, rampa, coordenação, financeiro e administração",
    description:
      "Cada função do terminal tem seu próprio painel: a recepção registra a chegada da aeronave, coordenação e gerência de rampa organizam os serviços solicitados, o financeiro cuida de cobranças e assinaturas mensais por aeronave, e a administração gerencia usuários, aeronaves e permissões. Um painel de TV exibe o status das aeronaves no pátio em tempo real.",
    stack: ["React", "TypeScript", "Cloudflare Workers", "Hono", "D1", "R2"],
    status: "Sistema em produção",
  },
  {
    slug: "aero-star-pilot",
    name: "Aero Star — App do Piloto",
    tagline: "Dashboard e assinatura digital de inspeção",
    description:
      "Cada piloto tem seu próprio dashboard para acompanhar a aeronave e assinar digitalmente o checklist de inspeção direto do celular ou tablet — a assinatura e os dados da inspeção são exportados automaticamente em PDF.",
    stack: ["React", "TypeScript", "react-signature-canvas", "jsPDF"],
    status: "Sistema em produção",
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
