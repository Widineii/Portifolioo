import { assetUrl } from "./site";

export type ProjectCategory = "Todos" | "Web" | "Desktop" | "API";

export type Project = {
  id: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<ProjectCategory, "Todos">;
  /** Print em `public/` (via `assetUrl`) ou URL absoluta */
  coverImage?: string;
  links?: { label: string; href: string }[];
};

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
      "Casos completos no GitHub: gestão para farmácia e mercado, dashboard financeiro (SaldoX), demo bancária Nextt Bank e APIs corporativas com Spring Boot.",
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

export const projects: Project[] = [
  {
    id: "saldox",
    type: "Sistema web",
    title: "SaldoX",
    description:
      "Dashboard financeiro com autenticação JWT, controle de receitas e despesas, exportação CSV/PDF e interface responsiva.",
    tags: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    category: "Web",
    coverImage: assetUrl("assets/projects/saldox.jpg"),
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/SaldoX" }],
  },
  {
    id: "clinica-agenda",
    type: "Sistema web",
    title: "Agenda Affetto — clínica",
    description:
      "Agendamento web com perfis admin e profissional, grade semanal por sala, atendimentos fixos ou avulsos e regras de cancelamento — substitui planilha por fluxo seguro no navegador.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Bootstrap"],
    category: "Web",
    coverImage: assetUrl("assets/projects/clinica-agenda.svg"),
    links: [
      { label: "Demo online", href: "https://clinica-agenda-production.up.railway.app" },
      { label: "Código no GitHub", href: "https://github.com/Widineii/clinica-agenda" },
    ],
  },
  {
    id: "mediaflow",
    type: "Portal web",
    title: "MediaFlow",
    description:
      "Catálogo de jogos, filmes, séries e mangás com busca, filtros, cards com capas, promoções, onde assistir e favoritos salvos no perfil local.",
    tags: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    category: "Web",
    coverImage: assetUrl("assets/projects/mediaflow.svg"),
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/Mediaflow" }],
  },
  {
    id: "farmacia",
    type: "Sistema desktop",
    title: "Sistema de Farmácia",
    description:
      "PDV, controle de estoque, relatórios em XML, gestão de produtos e fluxo completo para operação de farmácia.",
    tags: ["Java", "Swing", "SQLite", "XML", "PDV"],
    category: "Desktop",
    coverImage: assetUrl("assets/projects/farmacia.png"),
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
    coverImage: assetUrl("assets/projects/nextt-bank.jpg"),
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
    coverImage: assetUrl("assets/projects/mercado.png"),
    links: [{ label: "Código no GitHub", href: "https://github.com/Widineii/mercado-do-tonico" }],
  },
];

export const projectFilterCategories: ProjectCategory[] = ["Todos", "Web", "Desktop", "API"];

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
