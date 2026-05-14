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
3. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
4. Branch **`gh-pages`**, pasta **`/` (root)**. Salve.
5. O workflow `.github/workflows/deploy.yml` gera o build e publica na branch `gh-pages` a cada push em `main`.

Na primeira vez, após o workflow verde, a URL passa a responder em alguns minutos: `https://widineii.github.io/Portifolioo/`

## Imagens dos projetos

As capas vêm de `coverImage` em `src/data.ts`, usando `assetUrl()` para apontar para arquivos em **`public/assets/projects/`** (mesmo repositório — funcionam no GitHub Pages sem depender de outro site).

## Qualidade de código

```bash
npm run lint
npm run format
```
