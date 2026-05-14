# Portifolioo

Portfólio no estilo **case study** (uma página longa com seções claras, filtros de projetos e stack agrupada), pensado para hospedar no **GitHub Pages** em:

`https://widineii.github.io/Portifolioo/`

Referência de layout e hierarquia: [amanda-castro.vercel.app](https://amanda-castro.vercel.app/) — adaptado para conteúdo em português e dados fáceis de editar.

## Editar conteúdo

O conteúdo em `src/data.ts` foi preenchido com as informações públicas do seu [GitHub](https://github.com/Widineii) e do site [widineii.github.io/Portifolio](https://widineii.github.io/Portifolio/) (nome, bio, projetos, WhatsApp, stack). Ajuste o que quiser (por exemplo o nome da faculdade, se quiser exibir).

## Rodar no computador

```bash
npm install
npm run dev
```

Build de produção (gera a pasta `dist` com `base` já apontando para `/Portifolioo/`):

```bash
npm run build
```

## Publicar no GitHub

1. Crie o repositório [github.com/Widineii/Portifolioo](https://github.com/Widineii/Portifolioo) (se ainda não existir).
2. Envie este código para a branch `main` (ou `master`).
3. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` faz o deploy automático a cada push.

Na primeira vez, confira a aba **Actions** se o job concluiu sem erros.

## Imagens dos projetos

No componente, a área `Pré-visualização / captura de tela` é um placeholder. Você pode trocar por `<img>` com arquivos em `public/` ou URLs externas.
