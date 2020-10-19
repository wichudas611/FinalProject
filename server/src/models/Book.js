module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        price: DataTypes.STRING,
        type: DataTypes.STRING,
        pic: DataTypes.STRING,
    })
    return Book
}