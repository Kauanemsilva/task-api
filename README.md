# 📝 API de Tarefas - Node.js + Azure SQL

Uma API REST completa para gerenciamento de tarefas, desenvolvida com Node.js, Express e Azure SQL Database, pronta para deploy no Azure App Service.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Azure SQL Database** - Banco de dados relacional na nuvem
- **Azure App Service** - Plataforma de hospedagem
- **mssql** - Driver para SQL Server/Azure SQL
- **dotenv** - Gerenciamento de variáveis de ambiente

## 🔧 Funcionalidades

- ✅ **Criar tarefas** - POST /tarefas
- 📋 **Listar todas as tarefas** - GET /tarefas
- 🔍 **Buscar tarefa por ID** - GET /tarefas/:id
- ✏️ **Atualizar tarefa** - PUT /tarefas/:id
- 🗑️ **Deletar tarefa** - DELETE /tarefas/:id
- 📊 **Filtrar por status** - GET /tarefas/status/:status

## 🏃‍♂️ Como Executar Localmente

### 1. Pré-requisitos
- Node.js 16+ instalado
- Azure SQL Database configurado
- Git

### 2. Clonar e configurar
```bash
# Clonar repositório
git clone <seu-repositorio>
cd api-tarefas-azure

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas credenciais do Azure SQL
```

### 3. Configurar .env
```env
PORT=3000
DB_SERVER=seu-servidor.database.windows.net
DB_DATABASE=nome-do-banco
DB_USER=usuario-do-banco
DB_PASSWORD=senha-do-banco
```

### 4. Executar
```bash
# Modo desenvolvimento (com nodemon)
npm run dev

# Modo produção
npm start
```

A API estará disponível em: `http://localhost:3000`

## 📋 Endpoints da API

### GET /
Retorna informações da API e lista de endpoints disponíveis.
