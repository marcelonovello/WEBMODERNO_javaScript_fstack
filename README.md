[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<br> <h1 align="center">🧩 SISTEMA DE CADASTRO</h1> 
<p align="center"> Um sistema completo de cadastro com arquitetura moderna, construído com Node.js, React, MySQL e tecnologias web modernas. </p> 
<p align="center"> <a href="https://nodejs.org/"> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" /> </a> 
   <a href="https://reactjs.org/"> <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" /> </a> 
   <a href="https://www.mysql.com/"> <img src="https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white" /> </a> 
   <a href="./LICENSE"> <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat" /> </a> 
</p>

## 🔎 Visão Geral
Este projeto implementa um sistema completo de cadastro com backend em Node.js e frontend em React. Permite aos usuários:

## 🛠 Tecnologia
<p> <img src="https://skillicons.dev/icons?i=js,nodejs,react,mysql,git,vscode" /> </p>

---

## 📑 Table of Contents

- 📖 [Overview](#overview)
- 🛠 [Tech Stack](#tech-stack) 
- ✨ [Features](#features)
- 🏗 [Project Structure](#project-structure)   
- 🚀 [Getting Started](#getting-started)
  - 🛠 [Prerequisites](#prerequisites)
  - ⚙️ [Installation](#installation)
  - 🚀 [Usage](#usage)
  - 🧪 [Testing](#testing)
  	- 🔧 [Troubleshooting](#troubleshooting)
- 🗺 [Project Roadmap](#project-roadmap)  
- 👥 [Contributing](#contributing)  
- 📄 [License](#license)  
- 📚 [Acknowledgments](#acknowledgments)


---

## ✨ Funcionalidades

- 👥 **Cadastrar e gerenciar usuários** com sistema completo de registro e login
- 📊 **Operações CRUD completas** - criação, leitura, atualização e exclusão de dados
- 🔐 **Autenticação JWT** para proteção de rotas e segurança
- 🗃️ **Banco de dados MySQL** para armazenamento robusto de dados
- ⚡ **Desenvolvimento moderno** com ferramentas atualizadas e boas práticas

---

## 🏗 Estrutura do Projeto

```sh
└── 📦 sistema-cadastro/
    ├── 📂 backend/
    │   ├── 📂 controllers/     # Controladores da API
    │   ├── 📂 routes/         # Definição de rotas
    │   ├── 📂 middleware/     # Middlewares de autenticação
    │   ├── 📂 migrations/     # Scripts de migração do banco
    │   ├── 📄 package.json
    │   ├── 📄 server.js       # Servidor principal
    │   └── 📄 knexfile.js     # Configuração do Knex
    ├── 📂 frontend/
    │   ├── 📂 public/         # Arquivos públicos
    │   ├── 📂 src/
    │   │   ├── 📂 components/ # Componentes React
    │   │   ├── 📂 pages/      # Páginas da aplicação
    │   │   ├── 📂 services/   # Serviços de API
    │   │   └── 📄 App.js      # Componente principal
    │   ├── 📄 package.json
    │   └── 📄 .env           # Variáveis de ambiente
    ├── 📄 .env              # Variáveis de ambiente globais
    ├── 📄 docker-compose.yml # Orquestração de containers
    └── 📄 README.md          # Documentação
```
