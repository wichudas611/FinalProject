const { Order } = require('../models')
module.exports = {
    // get all order
    async index(req, res) {
        try {
            const orders = await Order.findAll()
            res.send(orders)
        } catch (err) {
            res.status(500).send({
                error: 'The orders information was incorrect'
            })
        }
    },
    // create order
    async create(req, res) {
        try {
            const order = await Order.create(req.body)
            res.send(order.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create order incorrect'
            })
        }
    },
    // edit order, suspend, active
    async put(req, res) {
        try {
            await Order.update(req.body, {
                where: {
                    id: req.params.orderId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update order incorrect'
            })
        }
    },
    // delete order
    async remove(req, res) {
        try {
            const order = await Order.findOne({
                where: {
                    id: req.params.orderId
                }
            })
            if (!order) {
                return res.status(403).send({
                    error: 'The order information was incorrect'
                })
            }
            await order.destroy()
            res.send(order)
        } catch (err) {
            res.status(500).send({
                error: 'The order information was incorrect'
            })
        }
    },
    // get order by id
    async show(req, res) {
        try {
            const order = await Order.findById(req.params.orderId)
            res.send(order)
        } catch (err) {
            req.status(500).send({
                error: 'The order information was incorrect'
            })
        }
    },
} 