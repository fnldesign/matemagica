# Carta Mitológica - React App

Este projeto exibe visualmente cartas de um baralho mitológico, com elementos sobrepostos como número, naipe, deus, título e imagem.

## 🚀 Tecnologias

* React 18
* Tailwind CSS (opcional)
* Node.js (v18 recomendada)

---

## 📦 Setup do Projeto do Zero

### 1. Instale o NVM (Node Version Manager)

Se você ainda não tem o NVM:

**Linux/macOS:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

**Windows:** Use o [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

---

### 2. Instale o Node.js (v18)

```bash
nvm install 18
nvm use 18
```

---

### 3. Crie o projeto React com Vite

```bash
npm create vite@latest carta-mitologica-react -- --template react
cd carta-mitologica-react
npm install
```

> 💡 Você pode escolher o template "react" ao ser solicitado.

---

### 4. Inicie o projeto

```bash
npm run dev
```

Abra o navegador e acesse:

```
http://localhost:5173
```

---

## 🧾 Scripts Disponíveis

* `npm run dev` — inicia o servidor de desenvolvimento
* `npm run build` — gera a versão de produção
* `npm run preview` — pré-visualização da build final

---

## ✨ Personalização

* Crie a pasta `src/components`.
* Adicione o componente `CartaMitologica.jsx`.
* Utilize props ou JSON para alimentar os dados dinamicamente.

---

## 📁 Estrutura Recomendada

```
carta-mitologica-react/
├─ src/
│  ├─ components/
│  │  └─ CartaMitologica.jsx
│  └─ App.jsx
├─ public/
├─ index.html
└─ package.json
```

---

## 🚀 Deploy na Vercel

### 1. Suba o projeto no GitHub

```bash
git init
git add .
git commit -m "primeiro commit"
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

### 2. Acesse [https://vercel.com](https://vercel.com) e conecte seu GitHub

### 3. Crie um novo projeto e selecione o repositório

### 4. Configure a build

* **Framework:** Vite
* **Build Command:** `npm run build`
* **Output Directory:** `dist`

### 5. Clique em "Deploy"

Vercel vai gerar automaticamente uma URL como:

```
https://carta-mitologica.vercel.app
```

A cada `git push` o Vercel atualiza automaticamente o deploy!

---

Para dúvidas, abra um issue ou entre em contato com o desenvolvedor.

---

**MIT License**
