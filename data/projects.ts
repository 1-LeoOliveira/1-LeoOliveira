export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo?: string;
  link?: string;
  status?: string;
  image?: string;
};

export type FeaturedGroup = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  link?: string;
  image?: string;
  cards: Project[];
};

// Os dois sistemas de aviação em destaque na home: Aero Star e
// FlightManager/FM Pilot são projetos distintos.
export const featuredSystems: FeaturedGroup[] = [
  {
    slug: "aero-star",
    name: "Aero Star",
    tagline: "Gestão de atendimento em solo para a Aero Star Táxi Aéreo",
    description:
      "Sistema em produção que digitaliza toda a operação de atendimento em solo (ground handling) da Aero Star Táxi Aéreo: do agendamento de chegada e partida ao faturamento, passando por check-in de passageiros e bagagem, inspeção da aeronave e assinatura digital da ficha de atendimento. Cada perfil da equipe — recepção, operações, coordenação, gerência de rampa, financeiro, administração e o próprio piloto — usa um painel dedicado à sua função, com notificações internas e um painel de TV no saguão mostrando os próximos voos em tempo real.",
    link: "https://aerostaratendimento.com",
    image: "/images/aero-star-real.png",
    cards: [
      {
        slug: "aero-star-operacional",
        name: "Painéis da Operação",
        tagline: "Recepção, rampa, coordenação, financeiro e administração",
        description:
          "Abertura e acompanhamento de atendimentos (chegada, partida, serviços avulsos, comissária) até a emissão da Ficha de Atendimento em PDF, cadastro de clientes/aeronaves/funcionários com tabela de preços e mensalistas, controle financeiro completo (receitas, despesas, contas a pagar/receber, ticket médio) e dashboards com indicadores reais por perfil.",
        stack: ["React", "TypeScript", "Cloudflare Workers", "Hono", "D1", "R2"],
        status: "Em produção",
      },
      {
        slug: "aero-star-pilot",
        name: "App do Piloto",
        tagline: "Inspeção da aeronave e assinatura digital",
        description:
          "O piloto acompanha seus próprios atendimentos e registra a inspeção da aeronave — avarias com fotos e assinatura digital do responsável, direto do celular. O relatório é exportado automaticamente em PDF.",
        stack: ["React", "TypeScript", "jsPDF", "Cloudflare R2"],
        status: "Em produção",
      },
    ],
  },
  {
    slug: "flight-manager",
    name: "FlightManager & FM Pilot",
    tagline: "Gestão de frota para empresas de aviação + finanças pessoais para pilotos",
    description:
      "Plataforma com dois produtos que rodam num único Worker Cloudflare: o FlightManager, sistema completo para empresas de aviação executiva gerenciarem frota, missões, tripulação, agendamentos e financeiro — multi-empresa, com banco de dados isolado por cliente e permissões por nível de usuário; e o FM Pilot, um app independente para pilotos proprietários controlarem despesas, voos e saldo de manutenção da própria aeronave, com assinatura via Stripe.",
    cards: [
      {
        slug: "flight-manager",
        name: "FlightManager",
        tagline: "Frota, missões, tripulação e financeiro — multi-empresa",
        description:
          "Cadastro completo da frota com documentos e habilitações da tripulação (com alerta de vencimento), abertura de missões com voos, tripulação e passageiros, agenda de reservas com bloqueio automático de sobreposição, rateio automático de despesas entre sócios da aeronave, borderôs, despesas fixas recorrentes e relatórios exportáveis em PDF/Excel. Login via Google OAuth com fila de aprovação e quatro níveis de permissão.",
        stack: ["React", "TypeScript", "Cloudflare Workers", "Hono", "D1 (multi-tenant)", "R2"],
        image: "/images/flight-manager-real.png",
        link: "https://flight-manager.com",
      },
      {
        slug: "fm-pilot",
        name: "FM Pilot",
        tagline: "Finanças pessoais para pilotos proprietários",
        description:
          "App independente de empresa para o piloto proprietário controlar despesas, voos e saldo de horas de manutenção da própria aeronave, com relatórios por categoria, convite de sócios da aeronave, assinatura mensal/anual via Stripe com teste grátis, e conquistas (XP e patentes) conforme o uso.",
        stack: ["React", "TypeScript", "Stripe", "Cloudflare Workers", "D1"],
        image: "/images/fm-pilot-real.png",
        link: "https://flightmanagerpilot.com",
      },
    ],
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
