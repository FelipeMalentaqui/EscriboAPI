# EscriboAPI

# *Documentação do Backend - Desafio Técnico 2*

## *Objetivo*

Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up), autenticação (sign in) e recuperação de informações do usuário.

## *Especificações Técnicas*

### *1. Formato de Comunicação*

- Todos os endpoints devem aceitar e retornar apenas dados no formato JSON.
- Retorno JSON para situações de endpoint não encontrado.

### *2. Persistência de Dados*

- Armazenamento persistente de dados do usuário.

### *3. Respostas de Erro*

- Formato padrão:

*{ "mensagem": "mensagem de erro" }*

    
## *Instruções para Utilização no VS Code*
    
  1. Clone o repositório:
    
  git clone https://github.com/seu-usuario/seu-repositorio.git
    
  1. Abra o projeto no VS Code:
    
  *code nome-do-seu-projeto*
    
  1. Instale as dependências:

  2. Utilize a extensão do VsCode para baixar o Thunder CLient:
    
  *npm install*
    
  1. Execute o servidor:

  2. npm run dev

  com o docker:
  
  docker-compose up -d
    
  A aplicação estará disponível em [http://localhost:3001](http://localhost:3001/).
    
  ## *Estrutura do Projeto*
    
  ### *Arquivos Principais*
    
  - *app.js:* Configuração e inicialização do Express.
  - *server.js:* Ponto de entrada do servidor.
  - *docker-compose.yaml:* Configuração do ambiente Docker.
  - *Dockerfile:* Configurações para a criação da imagem Docker.
    
    ### *Diretórios*
    
  - *src/controllers:* Controladores da lógica de negócios.
  - *src/routes:* Rotas da aplicação.
  - *src/services:* Serviços intermediários entre controllers e models.
  - *src/models:* Acesso e manipulação de dados no banco de dados.
  - *src/db:* Configurações de conexão com o banco de dados.
    
    
    Espero que estas informações auxiliem na compreensão e utilização do seu sistema. Em caso de dúvidas ou melhorias, fique à vontade para entrar em contato.
