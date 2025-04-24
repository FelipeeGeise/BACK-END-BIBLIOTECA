# 📚 API de Biblioteca - Back-End

Este é o back-end de uma aplicação de gerenciamento de biblioteca, desenvolvido com **Node.js**, **Express**, **SQLite** e **ESModules**. A API oferece funcionalidades para cadastrar, listar, editar e excluir livros, bem como interação com o banco de dados SQLite.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [ESModules](https://nodejs.org/api/esm.html)
- [Zod](https://github.com/colinhacks/zod) (opcional para validação de dados)

---

## 📁 Estrutura de Pastas

A estrutura do projeto é organizada da seguinte maneira:

📁 `controllers` - Contém os controladores da aplicação, responsáveis pela lógica de manipulação das requisições.

📁 `database` - Configuração do banco de dados SQLite e inicialização das tabelas.

📁 `models` - Interação com o banco de dados, manipulando dados na tabela de livros.

📁 `routes` - Define as rotas da aplicação, associando URLs aos controladores.

📁 `services` - Regras de negócio e manipulação das operações de CRUD.

---

## ⚙️ Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd BACK-END-BIBLIOTECA
