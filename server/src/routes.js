const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BookController = require('./controllers/BookController')
const OrderController = require('./controllers/OrderController')
module.exports = (app) => {
    /* RESFUL Api for users management */

    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        UserController.index
    )


    app.post('/login',
        UserAuthenController.login
    )


    // create book
    app.post('/book',
        BookController.create
    )
    // edit book, suspend, active
    app.put('/book/:bookId',
        BookController.put
    )
    // delete book
    app.delete('/book/:bookId',
        BookController.remove
    )
    // get book by id
    app.get('/book/:bookId',
        BookController.show
    )
    // get all book
    app.get('/books',
        BookController.index
    )


    // create order
    app.post('/order',
        OrderController.create
    )
    // edit order, suspend, active
    app.put('/order/:orderId',
        OrderController.put
    )
    // delete user
    app.delete('/order/:orderId',
        OrderController.remove
    )
    // get user by id
    app.get('/order/:orderId',
        OrderController.show
    )
    // get all user
    app.get('/orders',
        OrderController.index
    )
}