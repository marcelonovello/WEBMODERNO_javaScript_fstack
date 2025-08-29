[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<br> <h1 align="center">SISTEMA DE CADASTRO</h1> 
<p align="center"> Um sistema completo de cadastro com arquitetura moderna, construído com Node.js, React, MySQL e tecnologias web modernas. </p> 
<p align="center"> <a href="https://nodejs.org/"> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" /> </a> 
   <a href="https://reactjs.org/"> <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" /> </a> 
   <a href="https://www.mysql.com/"> <img src="https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white" /> </a> 
   <a href="./LICENSE"> <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat" /> </a> 
</p>

## 🔎 Visão Geral
Este projeto é uma ferramenta de produtividade para organização automatizada de caixas de entrada de e-mails, desenvolvida em Python. Permite que os usuários:

- 🔍 Organizar e categorizar e-mails automaticamente.
- 🗑️ Limpar e remover mensagens desnecessárias ou spam de forma eficiente.
- ⭐ Priorizar e-mails importantes para acesso rápido.
- 🧩 Design modular e extensível, permitindo adicionar novas regras ou provedores de e-mail.

## 💻 Tecnologias
<p> <img src="https://skillicons.dev/icons?i=js,nodejs,react,mysql,git,vscode" /> </p>

## 📑 Sumário

- [Visao Geral](#visao-geral)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Comecando](#comecando)
  - [Pre-requisitos](#pre-requisitos)
  - [Instalacao](#instalacao)
  - [Uso](#uso)
  - [Testes](#testes)
    - [Resolucao de Problemas](#resolucao-de-problemas)
- [Roteiro do Projeto](#roteiro-do-projeto)
- [Contribuindo](#contribuindo)
- [Licenca](#licenca)
- [Agradecimentos](#agradecimentos)

---

## Funcionalidades ✨

- 👥 **Cadastrar e gerenciar usuários** com sistema completo de registro e login
- 📊 **Operações CRUD completas** - criação, leitura, atualização e exclusão de dados
- 🔐 **Autenticação JWT** para proteção de rotas e segurança
- 🗃️ **Banco de dados MySQL** para armazenamento robusto de dados
- ⚡ **Desenvolvimento moderno** com ferramentas atualizadas e boas práticas

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

---

## 🚀 Começando

### ⚙️ Pré-requisitos

Antes de começar com o Sistema de Cadastro, certifique-se de que seu ambiente atende aos seguintes requisitos:

- <img align="center" src="https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=nodedotjs&logoColor=white" />
- <img align="center" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />
- <img align="center" src="https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white" />
- <img align="center" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" />

<a id="instalacao"></a>
## ⬇️ Instalação

Siga estos passos para configurar o projeto localmente:

1. Clone o repositório:
```bash
git clone https://github.com/marcelonovello/sistema-cadastro
cd sistema-cadastro
```

2. Configure as variáveis de ambiente:
```bash
# Backend - crie um arquivo .env na pasta backend/
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=sistema_cadastro
JWT_SECRET=seu_jwt_secret
PORT=3001
```

3. Instale as dependências:
```bash
# Backend
cd backend
npm install

# Frontend (em outro terminal)
cd frontend
npm install
```

4. Configure o banco de dados:
```bash
# Execute as migrations
cd backend
npx knex migrate:latest
```

## 🛠️ Uso
### Desenvolvimento:
```bash
# backend
cd backend
npm run dev  # Desenvolvimento com hot reload

# frotend
cd frontend
npm start    # Servidor de desenvolvimento React
```

### Produção:
```bash
# backend
cd backend
npm start

# frotend
cd frontend
npm run build
serve -s build
```

Acesse o frontend no navegador em `http://localhost:3000`


## 🧪 Testes
Execute os testes usando o seguinte comando:<br>
### Backend:
```bash
cd backend
npm test
```

### Frontend:
```bash
cd frontend
npm test
```

## 🔧 Resolução de Problemas
🚫 **Erro de conexão com o MySQL**:
```bash
# Verifique se o MySQL está rodando
sudo service mysql start

# Confirme as credenciais no arquivo .env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
```

🔑 Problemas de autenticação JWT:
```bash
# Verifique se o JWT_SECRET está definido
JWT_SECRET=seu_secreto_super_seguro_aqui
```

📦 Dependências não instaladas corretamente:
```bash
# Delete node_modules e package-lock.json e reinstale
rm -rf node_modules package-lock.json
npm install
```

🚪 Porta já em uso:
```bash
# Altere a porta no arquivo .env
PORT=3002
```

🐛 Migrations falhando:
```bash
# Reverta e execute novamente as migrations
npx knex migrate:rollback
npx knex migrate:latest
```

---

## 🗺 Roteiro do Projeto

- [X] **`Init`**: Inicializar estrutura do projeto com backend e frontend separados.
- [X] **`Config`**: Configurar ambiente com Node.js, React, MySQL e dependências.
- [X] **`Backend`**: Desenvolver API RESTful com autenticação JWT e operações CRUD.
- [ ] **`Database`**: Implementar migrations e configuração do banco MySQL.
- [ ] **`Frontend`**: Criar interface React completa para gerenciamento de usuários.
- [ ] **`Auth`**: Implementar sistema completo de autenticação no frontend.
- [ ] **`Testing`**: Criar testes unitários e de integração para backend e frontend.
- [ ] **`Deploy`**: Configurar ambiente de produção e deploy automatizado.
- [ ] **`Docs`**: Documentar API com Swagger e criar guia de uso completo.
- [ ] **`Docker`**: Containerizar aplicação com Docker e docker-compose.
- [ ] **`CI/CD`**: Implementar pipeline de integração contínua e deploy.
- [ ] **`Optimize`**: Otimizar performance e segurança da aplicação.

---

## 👥 Contribuindo

- **💬 [Participe das Discussões](https://github.com/marcelonovello/sistema-cadastro/discussions)**: Compartilhe suas ideias, forneça feedback ou faça perguntas.
- **🐛 [Reportar Problemas](https://github.com/marcelonovello/sistema-cadastro/issues)**: Envie bugs encontrados ou registre solicitações de novas funcionalidades para o projeto `sistema-cadastro`.
- **💡 [Submeta Pull Requests](https://github.com/marcelonovello/sistema-cadastro/blob/main/CONTRIBUTING.md)**: Analise PRs abertos e envie seus próprios PRs.

<details closed> <summary>Diretrizes de Contribuição</summary>
1. **Faça um Fork do Repositório**: Comece fazendo um fork do repositório para sua conta do GitHub.
2. **Clone Localmente**: Clone o repositório forked para sua máquina usando um cliente git.
   ```sh
   git clone https://github.com/marcelonovello/sistema-cadastro
   ```
3. **Crie uma Nova Branch**: Sempre trabalhe em uma nova branch, dando um nome descritivo.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Faça Suas Alterações**: Desenvolva e teste suas alterações localmente.
5. **Commit das Alterações**: Faça commit com uma mensagem clara descrevendo suas atualizações.
   ```sh
   git commit -m \'Implemented new feature x.\'
   ```
6. **Push para o github**: Envie as alterações para seu repositório forked.
   ```sh
   git push origin new-feature-x
   ```
7. **Submeta um Pull Request**: Crie um PR contra o repositório original. Descreva claramente as mudanças e suas motivações.
8. **Revisão**: Uma vez que o PR seja revisado e aprovado, ele será mergeado na branch principal. Parabéns pela contribuição!
</details>

<details closed>
<summary>Gráfico de Contribuidores</summary>
<br>
<p align="left">
   <a href="https://github.com{/marcelonovello/sistema-cadastro/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=marcelonovello/sistema-cadastro">
   </a>
</p>
</details>

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📚 Agradecimentos
- ⚡ **Node.js e Express**: Fornecem a base robusta para o backend da aplicação.
- 🎨 **React.js**: Permite a construção de interfaces modernas e responsivas.
- 🗃️ **MySQL e Knex.js**: Oferecem solução confiável para armazenamento e consulta de dados.
- 🔐 **JSON Web Tokens**: Proporciona sistema seguro de autenticação.
- 🛠️ **Comunidade Open Source**: Pelas inúmeras bibliotecas e ferramentas que tornam o desenvolvimento web moderno possível.

---
