require("dotenv").config();

module.exports = {
    HOST: process.env.MYSQL_HOST || 'localhost',
    USER: process.env.MYSQL_DB_USERNAME || 'root',
    PASSWORD: process.env.MYSQL_DB_PASSWORD || 'root',
    DB: process.env.MYSQL_DB_NAME || 'node-app',
    PORT: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0, 
        acquire: 30000,
        idle: 100
    }
};