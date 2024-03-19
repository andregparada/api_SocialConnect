# **SocialConnect API**

Este é o repositório da API RESTful desenvolvida para a SocialConnect, uma plataforma de rede social fictícia criada como exercício de desenvolvimento Backend. A API permite aos usuários realizar operações CRUD nas entidades Usuário, Post e Comentário.

## Requisitos
  - Node.js
  - Express.js
  - SQLite or MySQL
  
## Instalação
  - Clone o repositório: `git clone https://github.com/seu-usuario/socialconnect-api.git`
  - Instale as dependências: `npm install`
  
## Configuração do Banco de Dados
  - Execute as migrações para criar as tabelas: `npm run migrate`

## Uso
  - Inicie o servidor: `npm run dev`
  - Acesse a API em: http://localhost:3333
  
## Endpoints
  ### Sessions
    POST /sessions - Autentica usuário
  ### Usuários
    POST /users - Cria um novo usuário
    GET /users/:id - Retorna usuário específico
    PUT /users - Atualiza usuário autenticado
    DELETE users - Exclui usuário cadastrado
### Posts
    POST /posts - Cria um novo post
    GET /posts/:id - Retorna um post específico
    PUT /posts/:id - Atualiza um post existente
    DELETE /posts/:id - Exclui um post
### Comentários
    POST /comments/:post_id - Cria um novo comentário
    GET /comments/:id - Retorna um comentário específico
    PUT /comments/:id - Atualiza um comentário existente
    DELETE /comments/:id - Exclui um comentário
    
## Segurança
  - Todas as operações exigem autenticação JWT
  - Validação de entrada
  - Controle de acesso é aplicado para garantir que apenas usuários autorizados possam realizar operações CRUD
  
## Testes
  - A API pode ser testada usando ferramentas como Postman ou Insomnia. Certifique-se de verificar a funcionalidade e o desempenho antes de implantar em um ambiente de produção.

## Contribuição
  - Sinta-se à vontade para contribuir com melhorias ou correções de bugs
  - Abra uma issue para discutir novos recursos ou alterações importantes
  - Envie um pull request com suas alterações para revisão
