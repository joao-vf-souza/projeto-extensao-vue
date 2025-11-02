# GitHub Pages - Projeto Extensão TCC

Este projeto é automaticamente publicado no GitHub Pages através do GitHub Actions.

## URLs

- **Produção**: https://joao-vf-souza.github.io/projeto-extensao/
- **Repositório**: https://github.com/joao-vf-souza/projeto-extensao

## Como funciona o deploy

1. **Automático**: Todo push na branch `main` dispara o build e deploy
2. **Manual**: Pode ser executado manualmente na aba "Actions" do GitHub
3. **Build**: O projeto Vue.js é compilado com Vite
4. **Deploy**: Os arquivos são publicados no GitHub Pages

## Estrutura do deploy

```
projeto-extensao/
├── .github/workflows/deploy.yml  # Configuração do GitHub Actions
├── vite.config.js                # Configuração do Vite para GitHub Pages
└── dist/                         # Arquivos compilados (gerados automaticamente)
```

## Comandos úteis

```bash
# Build local para GitHub Pages
npm run build:gh-pages

# Build normal
npm run build

# Desenvolvimento
npm run dev
```