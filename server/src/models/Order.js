module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        title: DataTypes.STRING,
        price: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
    })
    return Order
}