const { Book } = require('../models')
module.exports = {
    // get all books
    async index(req, res) {
        try {
            const books = await Book.findAll()
            res.send(books)
        } catch (err) {
            res.status(500).send({
                error: 'The books information was incorrect'
            })
        }
    },
    // create book
    async create(req, res) {
        try {
            const book = await Book.create(req.body)
            res.send(book.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create book incorrect'
            })
        }
    },
    // edit book, suspend, active
    async put(req, res) {
        try {
            await Book.update(req.body, {
                where: {
                    id: req.params.bookId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update book incorrect'
            })
        }
    },
    // delete book
    async remove(req, res) {
        try {
            const book = await Book.findOne({
                where: {
                    id: req.params.bookId
                }
            })
            if (!book) {
                return res.status(403).send({
                    error: 'The book information was incorrect'
                })
            }
            await book.destroy()
            res.send(book)
        } catch (err) {
            res.status(500).send({
                error: 'The book information was incorrect'
            })
        }
    },
    // get book by id
    async show(req, res) {
        try {
            const book = await Book.findById(req.params.bookId)
            res.send(book)
        } catch (err) {
            req.status(500).send({
                error: 'The book information was incorrect'
            })
        }
    },
} 