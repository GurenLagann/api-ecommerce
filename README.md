Claro, aqui está o README atualizado com as informações das dependências do projeto:

---

# API de E-Commerce com Express e MongoDB

Esta é uma API simples de e-commerce desenvolvida com Node.js, Express e MongoDB. Ela permite criar, ler, atualizar e excluir produtos, gerenciar pedidos e muito mais. Use esta API como ponto de partida para construir sua própria plataforma de e-commerce.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/) (certifique-se de que o MongoDB esteja em execução)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/GurenLagann/api-ecommerce.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd api-ecommerce
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   As seguintes dependências serão instaladas:

   ```json
   "dependencies": {
     "bcrypt": "^5.1.1",
     "cors": "^2.8.5",
     "dotenv": "^16.3.1",
     "express": "^4.18.2",
     "jsonwebtoken": "^9.0.2",
     "mongoose": "^7.5.0"
   },
   "devDependencies": {
     "nodemon": "^3.0.1"
   }
   ```

4. Configure as variáveis de ambiente:

   Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente, como a URL do banco de dados MongoDB e a porta em que deseja executar o servidor.

5. Inicie o servidor:

   ```bash
   npm start
   ```

A API estará disponível em `http://localhost:3000` por padrão, a menos que você tenha alterado a porta nas variáveis de ambiente.

## Rotas

A API possui as seguintes rotas principais:

- **GET /products**: Obtém todos os produtos.
- **GET /products/:product_id**: Obtém um produto específico por ID.
- **POST /products/:user_id**: Cria um novo produto.
- **PUT /:user_id/product/:product_id**: Atualiza um produto existente por ID.
- **DELETE /:user_id/product/:product_id**: Exclui um produto por ID.

Além disso, existem rotas para gerenciar pedidos, usuários e autenticação. Consulte o código-fonte para obter detalhes completos sobre todas as rotas disponíveis.

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Se você encontrar problemas, erros ou tiver sugestões de melhorias, abra uma issue ou envie uma solicitação de pull request.


