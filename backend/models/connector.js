const { Sequelize } = require('sequelize');
const connection = new Sequelize({
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	dialect: process.env.DB_DIALECT
});

module.exports = connection;