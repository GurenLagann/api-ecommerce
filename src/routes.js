const { Router } = require('express')

//Import dos controlers
const User = require('./controllers/userController')
const Login = require('./controllers/loginController')
const Product = require('./controllers/productController')
const Cart = require('./controllers/cartController')

const { authenticate } = require('./middleware')

const routes = Router()

//Rotas de usuario
routes.post('/users', authenticate, User.createUser)
routes.get('/users', authenticate, User.getAllUsers)
routes.get('/user/:user_id', authenticate, User.getUserById)
routes.patch('/user/:user_id', authenticate, User.userUpdated)
routes.delete('/user/:user_id', authenticate, User.deleteUser)

//Rota para login do usuário
routes.post('/', Login.createSession)

//Rotas do Produto
routes.post('/products/:user_id', authenticate, Product.createProduct)
routes.get('/products', Product.getAllProducts)
routes.get('/products/:user_id', authenticate, Product.getUserProduct)
routes.get('/product/:product_id', Product.getProductById)
routes.patch('/:user_id/product/:product_id', authenticate, Product.productUpdated)
routes.delete('/:user_id/product/:product_id', authenticate, Product.deleteProduct)

//Rotas do carrinho
routes.post('/:user_id/cart/:user_id', Cart.createCart)
routes.get('/:user_id/carts/', authenticate, Cart.getAllCarts)
routes.get('/:user_id/carts/:user_id', authenticate, Cart.getUserCart)
routes.get('/:user_id/cart/:cart_id', authenticate, Cart.getCartById)
routes.delete('/:user_id/cart/:cart_id', authenticate, Cart.deleteCart)

module.exports = routes