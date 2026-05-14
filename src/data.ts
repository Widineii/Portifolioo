export type ProjectCategory =
  | "Todos"
  | "Web"
  | "Desktop"
  | "API"
  | "Institucional";

export const profile = {
  /** Nome exibido no site (GitHub: nome público) */
  name: "Widinei Martins",
  /** @user do GitHub */
  githubLogin: "Widineii",
  avatarUrl: "https://avatars.githubusercontent.com/u/174072875?v=4",
  role: "Desenvolvedor Full Stack — Java, Spring Boot & Node.js",
  location: "Belo Horizonte, MG · remoto para todo o Brasil",
  availability: "Disponível para novos projetos",
  lead:
    "Crio sistemas desktop, sistemas web, APIs e sites sob medida. Especializado em Java, Spring Boot, Node.js e bancos relacionais — com código aberto no GitHub para você conferir antes de fechar.",
  stats: [
    { value: "14+", label: "Repositórios públicos" },
    { value: "2+", label: "Anos com Java" },
    { value: "4", label: "Bancos de dados" },
    { value: "100%", label: "Código no GitHub" },
  ],
  about:
    "Sou Widinei Martins de Oliveira, estudante de Ciência da Computação e desenvolvedor Full Stack com foco em back-end. Moro em Belo Horizonte e trabalho remoto com clientes de todo o Brasil. Tenho experiência com Java, Spring Boot, Node.js, PostgreSQL, MySQL e SQLite — de PDV e estoque a dashboards financeiros, APIs corporativas e catálogos web.",
  softSkills: [
    "Comunicação clara (WhatsApp)",
    "Entrega no prazo combinado",
    "Código limpo e documentado",
    "Suporte e manutenção pós-entrega",
    "Briefing orientado ao negócio",
    "Entregas parciais para acompanhamento",
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Leitura técnica" },
  ],
  /** Faixa animada abaixo do hero */
  marqueeTags: [
    "Java",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Swing",
    "JWT",
    "REST",
    "Swagger",
    "GitHub",
    "Full Stack",
  ],
};

export const experience = [
  {
    title: "Desenvolvimento de software sob medida",
    company: "Freelance & projetos próprios",
    period: "2024 – presente",
    bullets: [
      "Sistemas desktop em Java Swing: PDV, controle de estoque, relatórios (XML/PDF), cadastros e permissões.",
      "Sistemas web com Spring Boot e Node.js: login com JWT, dashboards, painel administrativo e APIs REST com Swagger.",
      "Sites institucionais, landing pages e portfólios responsivos com HTML5, CSS3 e JavaScript.",
      "Modelagem e operação com PostgreSQL, MySQL e SQLite; correção de bugs, novas features e deploy quando aplicável.",
    ],
  },
  {
    title: "Projetos reais aplicados à formação",
    company: "Graduação em Ciência da Computação (em curso)",
    period: "Contínuo",
    bullets: [
      "Casos completos no GitHub: gestão para farmácia e mercado, dashboard financeiro (SaldoX), catálogo Mediaflow, demo bancária Nextt Bank e API Nexus para ciclo de vida de contratos.",
      "Priorizo documentação, organização de pacotes e padrões que facilitam manutenção por outros desenvolvedores.",
    ],
  },
];

export const education = [
  {
    step: "Formação",
    range: "Em curso",
    school: "Graduação — Ciência da Computação",
    title: "Bacharelado em Ciência da Computação",
    detail:
      "Cursando com foco em fundamentos de computação, estruturas de dados, engenharia de software e aplicação prática em projetos completos publicados no GitHub.",
    items: [
      "Integração entre teoria e entregas reais (web, desktop e APIs)",
      "Boas práticas de versionamento, testes e documentação em projetos de portfólio",
    ],
  },
];

export const certifications = [
  {
    tag: "Portfólio",
    year: "Contínuo",
    name: "Projetos open source com escopo completo",
    issuer: "GitHub — repositórios públicos revisáveis",
  },
  {
    tag: "Cliente",
    year: "Processo",
    name: "Entrega com suporte (15–30 dias) e documentação",
    issuer: "Contratos e entregas conforme briefing (site portfólio)",
  },
];

export const projects: {
  id: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<ProjectCategory, "Todos">;
  links?: { label: string; href: string }[];
}[] = [
  {
    id: "saldox",
    type: "Sistema web",
    title: "SaldoX",
    description:
      "Dashboard financeiro com autenticação JWT, controle de receitas e despesas, exportação CSV/PDF e interface responsiva.",
    tags: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    category: "Web",
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/SaldoX" }],
  },
  {
    id: "farmacia",
    type: "Sistema desktop",
    title: "Sistema de Farmácia",
    description:
      "PDV, controle de estoque, relatórios em XML, gestão de produtos e fluxo completo para operação de farmácia.",
    tags: ["Java", "Swing", "SQLite", "XML", "PDV"],
    category: "Desktop",
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/Sistema-de-Farmacia" }],
  },
  {
    id: "nextt",
    type: "Sistema web",
    title: "Nextt Bank",
    description:
      "Sistema bancário web demonstrativo: dashboard de operações, transferências, PIX simulado e painel administrativo.",
    tags: ["JavaScript", "Node.js", "Dashboard", "Admin"],
    category: "Web",
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/Nextt-bank" }],
  },
  {
    id: "tonico",
    type: "Sistema PDV",
    title: "Mercado do Tonico",
    description:
      "Vendas para mercado: produtos, estoque, frente de caixa, fechamento e relatórios — operação de ponta a ponta.",
    tags: ["Java", "PDV", "Estoque", "Vendas"],
    category: "Desktop",
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/mercado-do-tonico" }],
  },
  {
    id: "mediaflow",
    type: "Catálogo web",
    title: "Mediaflow",
    description:
      "Portal de entretenimento: jogos, filmes, séries, mangás e livros — busca, filtros, comparação de preços e favoritos.",
    tags: ["Java", "Spring Boot", "Catálogo", "Responsivo"],
    category: "Web",
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/Mediaflow" }],
  },
  {
    id: "nexus",
    type: "API corporativa",
    title: "Nexus Gestão",
    description:
      "API para gestão do ciclo de vida de contratos com fornecedores: JWT, scheduler de alertas, Swagger e documentação.",
    tags: ["Java 17", "Spring Boot 3", "JWT", "MySQL", "Swagger"],
    category: "API",
    links: [
      {
        label: "Código no GitHub",
        href: "https://github.com/Widineii/Nexus-Gest-o---Contract-Flow-API",
      },
    ],
  },
  {
    id: "portifolio-site",
    type: "Institucional",
    title: "Portfólio comercial (site)",
    description:
      "Landing completa com serviços, projetos, stack, planos, FAQ e formulário que abre WhatsApp — seu vitrine atual no ar.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    category: "Institucional",
    links: [
      { label: "Ver site", href: "https://widineii.github.io/Portifolio/" },
      { label: "Código", href: "https://github.com/Widineii/Portifolio" },
    ],
  },
  {
    id: "portifolioo",
    type: "Case study",
    title: "Portifolioo (este site)",
    description:
      "Versão estilo case study (React + Vite) para GitHub Pages, com filtros de projetos, jornada e stack agrupada.",
    tags: ["React", "TypeScript", "Vite", "Framer Motion"],
    category: "Web",
    links: [{ label: "Código", href: "https://github.com/Widineii/Portifolioo" }],
  },
];

export const stackGroups = [
  {
    title: "Back-end & APIs",
    subtitle: "Java e ecossistema servidor",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "JPA",
      "REST",
      "JWT",
      "Swagger",
      "Node.js",
    ],
  },
  {
    title: "Desktop & cliente",
    subtitle: "Software local e gestão",
    items: ["Java Swing", "SQLite", "PDV", "Relatórios (PDF/XML)"],
  },
  {
    title: "Dados",
    subtitle: "Persistência e SQL",
    items: ["PostgreSQL", "MySQL", "SQLite", "Modelagem", "Migrações"],
  },
  {
    title: "Front-end & entrega",
    subtitle: "Web e colaboração",
    items: ["JavaScript", "HTML5", "CSS3", "Git", "GitHub", "GitHub Pages"],
  },
];

const waText = encodeURIComponent(
  "Olá! Vi seu portfólio e quero conversar sobre um projeto."
);

export const contact = {
  headline: "Pronto para o seu próximo sistema?",
  body:
    "Me chama no WhatsApp — resposta rápida e primeira conversa gratuita. Todo o trabalho pode ser acompanhado por entregas parciais no GitHub.",
  links: [
    {
      label: "WhatsApp",
      href: `https://wa.me/5537998550994?text=${waText}`,
      variant: "primary" as const,
    },
    { label: "GitHub", href: "https://github.com/Widineii", variant: "ghost" as const },
    {
      label: "Site portfólio (anterior)",
      href: "https://widineii.github.io/Portifolio/",
      variant: "ghost" as const,
    },
  ],
};

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#jornada", label: "Jornada" },
  { href: "#formacao", label: "Formação" },
  { href: "#credenciais", label: "Credenciais" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];
