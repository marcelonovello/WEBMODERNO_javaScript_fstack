# Projeto Full Stack

Este é um projeto full stack com um backend desenvolvido em Node.js e um frontend desenvolvido com uma biblioteca/framework JavaScript.

## Estrutura do Projeto

### Backend:

O backend é responsável por toda a lógica de negócio do aplicativo e interage com o banco de dados. Ele inclui os seguintes diretórios e arquivos principais:

- `api/`: Contém os controladores e rotas do aplicativo.
- `config/`: Arquivos de configuração, incluindo o banco de dados e outras configurações essenciais.
- `migrations/`: Scripts de migração para a base de dados.
- `schedule/`: Scripts de tarefas agendadas.
- `.env`: Arquivo de variáveis de ambiente.
- `index.js`: Ponto de entrada do backend.
- `knexfile.js`: Configurações do Knex.js para manipulação de banco de dados.
- `package.json`: Dependências do projeto e scripts de execução.

#### Dependências:
- `bcrypt-nodejs`: Para hash de senhas.
  - `body-parser`: Middleware para lidar com requisições HTTP.
  - `consign`: Para carregar automaticamente scripts.
  - `cors`: Para permitir requisições cross-origin.
  - `express`: Framework para construção de APIs.
  - `jwt-simple`: Para criação e verificação de tokens JWT.
  - `knex`: Query builder para SQL.
  - `moment`: Para manipulação de datas.
  - `mongoose`: ODM para MongoDB.
  - `node-schedule`: Para agendamento de tarefas.
  - `passport`: Middleware para autenticação.
  - `passport-jwt`: Estratégia JWT para Passport.
  - `pg`: Driver para PostgreSQL.
  - `pm2`: Gerenciador de processos de produção.
    
- **Dependências de desenvolvimento**:
  - `nodemon`: Para reiniciar automaticamente o servidor durante o desenvolvimento.

### Frontend:

O frontend é a interface do usuário do aplicativo, desenvolvido usando uma biblioteca ou framework JavaScript. Ele inclui os seguintes diretórios e arquivos principais:

- `public/`: Contém os arquivos estáticos e o arquivo `index.html`.
- `src/`: Contém o código-fonte do frontend, incluindo componentes, serviços, etc.
- `.gitignore`: Arquivo que especifica quais arquivos devem ser ignorados pelo Git.
- `babel.config.js`: Configurações do Babel para transpilar o código.
- `package.json`: Dependências do frontend e scripts de execução.
- `README.md`: Instruções para configurar e executar o frontend.

#### Dependências:
  - `axios`: Cliente HTTP para realizar requisições.
  - `bootstrap-vue`: Integração do Bootstrap com Vue.js.
  - `font-awesome`: Ícones para a interface.
  - `highlightjs`: Biblioteca para destaque de sintaxe.
  - `liquor-tree`: Componente de árvore para Vue.js.
  - `vue`: Framework JavaScript utilizado.
  - `vue-gravatar`: Componente Gravatar para Vue.js.
  - `vue-mq`: Gerenciador de media queries para Vue.js.
  - `vue-router`: Roteamento para Vue.js.
  - `vue-toasted`: Notificações toast para Vue.js.
  - `vue2-editor`: Editor de texto para Vue.js.
  - `vuex`: Gerenciamento de estado para Vue.js.
    
 **Dependências de desenvolvimento**:
  - `@vue/cli-plugin-babel`: Plugin Babel para Vue CLI.
  - `@vue/cli-plugin-eslint`: Plugin ESLint para Vue CLI.
  - `@vue/cli-service`: Serviço CLI para Vue.
  - `vue-template-compiler`: Compilador de templates Vue.js.

### Configuração do Projeto

Para configurar o projeto, siga as instruções abaixo.

#### Backend

1. Navegue até o diretório `backend`.
   ```bash
   cd backend
   
3. Instale as dependências com:

   ```bash
   npm install

4. Configure as variáveis de ambiente no arquivo .env e inicie o servidor com:
   ```bash
   npm start

#### Frontend

1. Navegue até o diretório `frontend`.
   ```bash
   cd frontend

2. Para iniciar o servidor de desenvolvimento:
   ```bash
   npm run serve
   
3. Para compilar e minificar para produção:
   ```bash
   npm run build
   
4. Para verificar e corrigir problemas de linting:
   ```bash
   npm run lint

## Autor

Desenvolvido por Marcelo Novello.
