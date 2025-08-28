[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<br> <h1 align="center">REGISTRATION SYSTEM</h1> <p align="center"> A complete registration system with modern architecture, built with Node.js, React, MySQL and modern web technologies. </p> <p align="center"> <a href="https://nodejs.org/"> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" /> </a> <a href="https://reactjs.org/"> <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" /> </a> <a href="https://www.mysql.com/"> <img src="https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white" /> </a> <a href="./LICENSE"> <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat" /> </a> </p>

## 🔎 Overview
This project represents a complete solution for user registration management, implementing an architecture that clearly separates responsibilities between frontend and backend. The application was developed to demonstrate full-stack development best practices, including secure authentication, CRUD operations, and an intuitive interface.

## 🛠 Technologies
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

## ✨ Features

- 👥 **Register and manage users** with complete registration and login system
- 📊 **Complete CRUD operations** - create, read, update, and delete data
- 🔐 **JWT Authentication** for route protection and security
- 🗃️ **MySQL database** for robust data storage
- ⚡ **Modern development** with updated tools and best practices

---

## 🏗 Project Structure

```sh
└── 📦 registration-system/
    ├── 📂 backend/
    │   ├── 📂 controllers/     # API controllers
    │   ├── 📂 routes/         # Route definitions
    │   ├── 📂 middleware/     # Authentication middlewares
    │   ├── 📂 migrations/     # Database migration scripts
    │   ├── 📄 package.json
    │   ├── 📄 server.js       # Main server
    │   └── 📄 knexfile.js     # Knex configuration
    ├── 📂 frontend/
    │   ├── 📂 public/         # Public files
    │   ├── 📂 src/
    │   │   ├── 📂 components/ # React components
    │   │   ├── 📂 pages/      # Application pages
    │   │   ├── 📂 services/   # API services
    │   │   └── 📄 App.js      # Main component
    │   ├── 📄 package.json
    │   └── 📄 .env           # Environment variables
    ├── 📄 .env              # Global environment variables
    ├── 📄 docker-compose.yml # Container orchestration
    └── 📄 README.md          # Documentation
```

---

## ⚡ Getting Started

### 🛠 Prerequisites

Before starting with the Registration System, ensure your environment meets the following requirements:

- <img align="center" src="https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=nodedotjs&logoColor=white" />
- <img align="center" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />
- <img align="center" src="https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white" />
- <img align="center" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" />

## ⚙️ Installation

Follow these steps to set up the project locally:

1. Clone the repository:
```bash
git clone https://github.com/marcelonovello/sistema-cadastro
cd sistema-cadastro
```

2. Configure environment variables:
```bash
# Backend - create a .env file in the backend/ folder
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=registration_system
JWT_SECRET=your_jwt_secret
PORT=3001
```

3. Install dependencies:
```bash
# Backend
cd backend
npm install

# Frontend (in another terminal)
cd frontend
npm install
```

4. Configure the database:
```bash
# Run migrations
cd backend
npx knex migrate:latest
```

## 🚀 Usage
### Development:
```bash
# backend
cd backend
npm run dev  # Development with hot reload

#frontend
cd frontend
npm start    # React development server
```

### Production:
```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
serve -s build
```

3. Access the frontend in your browser at `http://localhost:3000`

## 🧪 Testing
Run tests using the following command:<br>
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

## 🔧 Troubleshooting
🚫 **MySQL connection error**:
```bash
# Check if MySQL is running
sudo service mysql start

# Confirm credentials in the .env file
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
```

🔑 JWT authentication issues:
```bash
# Check if JWT_SECRET is defined
JWT_SECRET=your_super_secure_secret_here
```

📦 Dependencies not installed correctly:
```bash
# Delete node_modules and package-lock.json and reinstall
rm -rf node_modules package-lock.json
npm install
```

🚪 Port already in use:
```bash
# Change the port in the .env file
PORT=3002
```

🐛 Migrations failing:
```bash
# Rollback and run migrations again
npx knex migrate:rollback
npx knex migrate:latest
```

---

## 🗺 Project Roadmap

- [X] **`Init`**: Initialize project structure with separated backend and frontend.
- [X] **`Config`**: Configure environment with Node.js, React, MySQL and dependencies.
- [X] **`Backend`**: Develop RESTful API with JWT authentication and CRUD operations.
- [ ] **`Database`**: Implement migrations and MySQL database configuration.
- [ ] **`Frontend`**: Create complete React interface for user management.
- [ ] **`Auth`**: Implement complete authentication system in the frontend.
- [ ] **`Testing`**: Create unit and integration tests for backend and frontend.
- [ ] **`Deploy`**: Configure production environment and automated deployment.
- [ ] **`Docs`**: Document API with Swagger and create complete usage guide.
- [ ] **`Docker`**: Containerize application with Docker and docker-compose.
- [ ] **`CI/CD`**: Implement continuous integration and deployment pipeline.
- [ ] **`Optimize`**: Optimize application performance and security.

---

## 👥 Contributing

- **💬 [Join Discussions](https://github.com/marcelonovello/sistema-cadastro/discussions)**: Share your ideas, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/marcelonovello/sistema-cadastro/issues)**: Submit bugs found or log feature requests for the  `sistema-cadastro` project.
- **💡 [Submit Pull Requests](https://github.com/marcelonovello/sistema-cadastro/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/marcelonovello/sistema-cadastro
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m \'Implemented new feature x.\'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/marcelonovello/sistema-cadastro/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=marcelonovello/sistema-cadastro">
   </a>
</p>
</details>

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

---

📚 Acknowledgments
- ⚡ **Node.js and Express**: Provide the robust foundation for the application backend.
- 🎨 **React.js**: Enables building modern and responsive interfaces.
- 🗃️ **MySQL and Knex.js**: Offer reliable solution for data storage and querying.
- 🔐 **JSON Web Tokens**: Provides secure authentication system.
- 🛠️ **Open Source Community**: For the countless libraries and tools that make modern web development possible.
