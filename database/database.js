const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;