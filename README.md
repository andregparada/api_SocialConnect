# SocialConnect API

Este é o repositório da API RESTful desenvolvida para a SocialConnect, uma plataforma de rede social fictícia criada como exercício de desenvolvimento Backend. A API permite aos usuários realizar operações CRUD nas entidades Usuário, Post e Comentário.

## Requisitos
  Node.js
  Express.js
  SQLite or MySQL
  
## Instalação
  Clone o repositório: git clone https://github.com/seu-usuario/socialconnect-api.git
  Instale as dependências: npm install
  
## Configuração do Banco de Dados
  Execute as migrações para criar as tabelas: npm run migrate

## Uso
  Inicie o servidor: npm start
  Acesse a API em: http://localhost:3000
  
## Endpoints
  ### Usuários
    GET /api/users: Retorna todos os usuários
    GET /api/users/:id: Retorna um usuário específico
    POST /api/users: Cria um novo usuário
    PUT /api/users/:id: Atualiza um usuário existente
    DELETE /api/users/:id: Exclui um usuário
### Posts
    GET /api/posts: Retorna todos os posts
    GET /api/posts/:id: Retorna um post específico
    POST /api/posts: Cria um novo post
    PUT /api/posts/:id: Atualiza um post existente
    DELETE /api/posts/:id: Exclui um post
### Comentários
    GET /api/comments: Retorna todos os comentários
    GET /api/comments/:id: Retorna um comentário específico
    POST /api/comments: Cria um novo comentário
    PUT /api/comments/:id: Atualiza um comentário existente
    DELETE /api/comments/:id: Exclui um comentário
    
## Segurança
  Todas as operações exigem autenticação JWT
  Validação de entrada
  Controle de acesso é aplicado para garantir que apenas usuários autorizados possam realizar operações CRUD
  
## Testes
  A API pode ser testada usando ferramentas como Postman ou Insomnia. Certifique-se de verificar a funcionalidade e o desempenho antes de implantar em um ambiente de produção.

## Contribuição
  Sinta-se à vontade para contribuir com melhorias ou correções de bugs
  Abra uma issue para discutir novos recursos ou alterações importantes
  Envie um pull request com suas alterações para revisão
