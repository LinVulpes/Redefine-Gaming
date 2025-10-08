# 🎮 Redefine Gaming – React + Vite + TypeScript

This is a minimal React + Vite + TypeScript setup, featuring HMR (Hot Module Replacement), ESLint, and a streamlined development experience. The project is deployed via GitHub Pages.

🔗 **Live Site:** [Redefine Gaming](https://linvulpes.github.io/Redefine-Gaming/)

---

## 🚀 Tech Stack

- **React**
- **Vite**
- **TypeScript**
- **ESLint**
- **GitHub Pages** (deployment)

---

## 🛠 Plugins Used

Vite supports two official plugins for React:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – uses [Babel](https://babeljs.io/) for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) – uses [SWC](https://swc.rs/) for Fast Refresh

---

## ⚛️ React Compiler

> The React Compiler is **not enabled** in this template.

If you'd like to enable it, follow the official guide:  
📘 [React Compiler Installation](https://react.dev/learn/react-compiler/installation)

---

## 📏 ESLint Configuration

This template comes with basic ESLint rules for code quality.

For production apps, consider enabling **type-aware linting** with [`typescript-eslint`](https://typescript-eslint.io).

More info:  
- [Vite React TS Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

---

## 📂 Project Structure

```bash
my-project/
├─ public/
├─ src/
│  ├─ components/
│  ├─ App.tsx
│  ├─ main.tsx
├─ index.html
├─ tsconfig.json
├─ vite.config.ts
└─ ...

## 📦 Getting Started

### Install dependencies
```bash
npm install

### Start development server
```bash
npm run dev

### Build for production
```bash
npm run build

### Preview production build
```bash
npm run preview
