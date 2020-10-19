module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'BOOKSALEDB',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './booksale-db.sqlite'
        },
    },
    authentication:{
        jwtSecret:"test"
    }
}