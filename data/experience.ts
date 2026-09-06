export type Job = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Analista de Suporte I",
    company: "Focalle",
    period: "04/2026 – Atual",
    bullets: [
      "Administração de bancos de dados, com foco em integridade, desempenho e disponibilidade.",
      "Manutenção e correção de ambientes Docker e atualização de firmware.",
      "Análise técnica de demandas recebidas via chamado, com diagnóstico e resolução de incidentes.",
      "Coordenação de equipe técnica e condução de treinamentos internos.",
    ],
  },
  {
    role: "Analista de Sistemas / Desenvolvedor Web",
    company: "PANPHARMA",
    period: "07/2021 – 01/2026",
    bullets: [
      "Desenvolvimento de aplicações web corporativas com React, Next.js, TypeScript e Node.js.",
      "Criação e manutenção de APIs REST, integrações entre sistemas e automação de rotinas, reduzindo trabalho manual das áreas de negócio.",
      "Levantamento de requisitos junto às áreas usuárias e tradução das demandas em soluções técnicas.",
      "Administração de servidores e bancos de dados que suportavam as aplicações.",
      "Documentação técnica, treinamentos internos, sustentação das aplicações em produção e melhoria contínua dos sistemas.",
    ],
  },
  {
    role: "Analista de Sistemas Júnior",
    company: "KVK Serviços Contábeis",
    period: "11/2019 – 06/2020",
    bullets: [
      "Desenvolvimento de sistemas internos com JavaScript, React e Python/Django.",
      "Automação de cálculos, relatórios fiscais e rotinas administrativas.",
      "Análise de requisitos, melhoria de processos e suporte aos sistemas contábeis e fiscais.",
    ],
  },
  {
    role: "Analista de Suporte de Computadores Trainee",
    company: "Distribuidora Big Ben",
    period: "07/2016 – 05/2018",
    bullets: [
      "Suporte técnico corporativo, diagnóstico e resolução de problemas em sistemas e estações de trabalho.",
      "Apoio à infraestrutura de TI e manutenção de sistemas internos.",
    ],
  },
];

export const certifications = [
  { name: "Python para Desenvolvimento Web (Django)", issuer: "Udemy", year: "2023" },
  { name: "JavaScript Moderno e React.js", issuer: "Rocketseat", year: "2023" },
  { name: "Metodologias Ágeis – Scrum Foundation", issuer: "Certiprof", year: "2022" },
];
