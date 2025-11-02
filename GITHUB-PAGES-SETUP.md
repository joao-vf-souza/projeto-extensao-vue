# 🚀 Guia Completo - Deploy no GitHub Pages

## ✅ **Pré-requisitos Configurados**

Seu projeto já está configurado com:
- ✅ `vite.config.js` atualizado para GitHub Pages
- ✅ Workflow do GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Scripts de build no `package.json`
- ✅ Build testado localmente com sucesso

## 🔧 **Passos para o Deploy**

### 1. **Fazer Push do Código para o GitHub**

```bash
# Adicionar todos os arquivos
git add .

# Commit das mudanças
git commit -m "Configurar deploy para GitHub Pages"

# Push para o repositório
git push origin main
```

### 2. **Ativar GitHub Pages no Repositório**

1. Vá para o repositório: `https://github.com/joao-vf-souza/projeto-extensao`
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione: **GitHub Actions**
5. Salve as configurações

### 3. **Executar o Deploy**

O deploy acontece automaticamente quando você faz push para a branch `main`. 

**Para acompanhar:**
1. Vá para a aba **Actions** no GitHub
2. Você verá o workflow "Deploy to GitHub Pages" executando
3. Aguarde até aparecer ✅ (verde) = sucesso

### 4. **Acessar o Site Publicado**

Após o deploy bem-sucedido, acesse:
```
https://joao-vf-souza.github.io/projeto-extensao/
```

## 🛠️ **Comandos Úteis**

```bash
# Desenvolvimento local
npm run dev

# Build para produção (GitHub Pages)
npm run build

# Build específico para GitHub Pages
npm run build:gh-pages

# Preview do build local
npm run preview
```

## 📁 **Estrutura de Arquivos Importantes**

```
projeto-extensao-vue/
├── .github/workflows/
│   └── deploy.yml                 # ← Workflow do GitHub Actions
├── dist/                          # ← Arquivos compilados (criado automaticamente)
├── public/                        # ← Arquivos estáticos (logos, etc.)
├── src/                          # ← Código fonte Vue.js
├── vite.config.js                # ← Configuração para GitHub Pages
├── package.json                  # ← Scripts de build
└── DEPLOY.md                     # ← Este guia
```

## 🔄 **Fluxo de Deploy Automático**

1. **Push** para `main` → 
2. **GitHub Actions** executa → 
3. **Build** do projeto → 
4. **Deploy** para GitHub Pages → 
5. **Site** atualizado em `https://joao-vf-souza.github.io/projeto-extensao/`

## 🐛 **Troubleshooting**

### Se o deploy falhar:
1. Verifique os **logs** na aba Actions
2. Certifique-se que o repositório é **público** ou tem GitHub Pages habilitado
3. Verifique se as **permissões** estão corretas nas Settings > Actions

### Se o site não carregar corretamente:
1. Verifique se `base: '/projeto-extensao/'` está correto no `vite.config.js`
2. Certifique-se que os **caminhos dos arquivos** estão relativos (começando com `/`)

## 📞 **Próximos Passos**

1. **Faça o push** do código atual
2. **Ative GitHub Pages** nas configurações
3. **Aguarde o primeiro deploy** (2-3 minutos)
4. **Acesse o site** no link fornecido

O projeto está **100% pronto** para deploy! 🎉