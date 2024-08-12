# Projeto Full Stack

Este é um projeto full stack com um backend desenvolvido em Node.js e um frontend desenvolvido com uma biblioteca/framework JavaScript.


### Backend

O backend é responsável por toda a lógica de negócio do aplicativo e interage com o banco de dados. Ele inclui os seguintes diretórios e arquivos principais:

- `api/`: Contém os controladores e rotas do aplicativo.
- `config/`: Arquivos de configuração, incluindo o banco de dados e outras configurações essenciais.
- `migrations/`: Scripts de migração para a base de dados.
- `schedule/`: Scripts de tarefas agendadas.
- `.env`: Arquivo de variáveis de ambiente.
- `index.js`: Ponto de entrada do backend.
- `knexfile.js`: Configurações do Knex.js para manipulação de banco de dados.
- `package.json`: Dependências do projeto e scripts de execução.

### Frontend

O frontend é a interface do usuário do aplicativo, desenvolvido usando uma biblioteca ou framework JavaScript. Ele inclui os seguintes diretórios e arquivos principais:

- `public/`: Contém os arquivos estáticos e o arquivo `index.html`.
- `src/`: Contém o código-fonte do frontend, incluindo componentes, serviços, etc.
- `.gitignore`: Arquivo que especifica quais arquivos devem ser ignorados pelo Git.
- `babel.config.js`: Configurações do Babel para transpilar o código.
- `package.json`: Dependências do frontend e scripts de execução.
- `README.md`: Instruções para configurar e executar o frontend.

### Configuração do Projeto

Para configurar o projeto, siga as instruções abaixo.

#### Backend

1. Navegue até o diretório `backend`.
2. Instale as dependências com:

   ```bash
   npm install

3. Configure as variáveis de ambiente no arquivo .env e inicie o servidor com:
   ```bash
   npm start

#### Frontend

1. Para iniciar o servidor de desenvolvimento:
   ```bash
   npm run serve
   
2. Para compilar e minificar para produção:
   ```bash
   npm run build
   
3. Para verificar e corrigir problemas de linting:
   ```bash
   npm run lint
