<h1 align="center"> Aplicação de Chat </h1>

<p align="center">
Aplicação de Chat On-line
</p>

<p align="center">
  <a href="#-tecnologia">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-configuração">Configuração do Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-desenvolvimento">Desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato">Contato</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## 💻 Tecnologia

Frontend:

- Typescript
- HTML
- CSS
- ReactJS
- Redux
- [MUI](https://mui.com/pt/material-ui/getting-started/overview/)
- Socket.io
- Axios

Backend:

- Typescript
- PostgreSQL
- Express
- NodeJS
- Cors
- Socket.io
- TypeORM
- Dotenv

## 💻 Configuração

Clone este repositório para o seu ambiente local.

### Frontend:

Abra um terminal ou prompt de comando e navegue até o diretório WEB.
Execute o seguinte comando para instalar as dependências do projeto:

- npm install

Este comando instalará todas as dependências necessárias listadas no arquivo package.json.

Durante o desenvolvimento, você pode executar o servidor de desenvolvimento para visualizar o projeto no navegador. Execute o seguinte comando:

- npm run dev

### Backend:

Certifique-se de ter o PostgreSQL instalado em seu sistema.
Abra um terminal ou prompt de comando e navegue até o diretório SERVER.
Execute o seguinte comando para instalar as dependências do projeto:

- npm install

Este comando instalará todas as dependências necessárias listadas no arquivo package.json.

Certifique-se de ter o PostgreSQL configurado corretamente em seu sistema. Crie um banco de dados vazio para ser utilizado pelo projeto. Ajuste as configurações de conexão com o banco de dados no arquivo ".env-example"

Este projeto utiliza o TypeORM para a criação e gerenciamento do banco de dados. Execute as migrações do banco de dados com o seguinte comando:

- migration:run": Cria as tabelas no banco de dados.
- migration:show: Mostra as migrations pendentes.

Após a configuração do banco de dados e das dependências, execute o seguinte comando para iniciar o servidor:

- npm run dev

## 📓 Desenvolvimento

### Frontend

"WEB
├── public/
│ ├── favicon.ico
├── src/
│ ├── assets/
│ │ ├── images/
│ ├── interfaces/
│ ├── pages/
│ │ ├── home/
│ │ ├── login/
│ │ ├── registration/
│ ├── routes/
│ ├── services/
│ │ ├── api/
│ ├── shared/
│ │ ├── components/
│ │ │ ├── box/
│ │ │ ├── button/
│ │ │ ├── footer/
│ │ │ ├── grid/
│ │ │ ├── heading/
│ │ │ ├── input/
│ │ │ ├── logo/
│ │ │ ├── logout/
│ │ │ ├── paper/
│ │ │ ├── regex/
│ │ │ ├── types/
│ ├── store/
│ │ ├── modules/
│ │ │ ├── userLocal/
│ │ │ ├── users/
│ │ │ ├── usersLogged/
│ ├── styles/
│ ├── App.tsx
│ ├── main.tsx
├── index.html
├── .gitignore
├── tsconfig.json
├── package.json
└── ..."

Trabalho final do Modulo Banco de Dados III da Growdev. API NoteSystem_API_Arquitetura a ser consumida pelo Note System [Note System Web](https://github.com/Andreloren/Note_System_Web)
