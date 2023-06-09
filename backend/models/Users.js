const connection = require('./connector');
const { DataTypes } = require('sequelize')
const Users = connection.define('User', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		unique: true,
		allowNull: false,
		primaryKey: true
	},
	username: {
		type: DataTypes.STRING(30),
		unique: true,
		allowNull: false
	},
	firstName: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	secondName: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	role: {
		type: DataTypes.ENUM('USER', 'SELLER', 'ADMIN'),
		allowNull: false,
		defaultValue: 'USER'
	},
	password: {
		type: DataTypes.STRING(255),
		allowNull: false
	},
	shopper: {
		type: DataTypes.JSONB,
		defaultValue: {}
	},
	card_number: {
		type: DataTypes.STRING(255)
	},
	farm_calendar: {
		type: DataTypes.ARRAY(DataTypes.JSON),
		defaultValue: []
	}
})

Users.sync({ force: false })
	.then(() => {
		console.log('Таблица пользователей создана.');
	})
	.catch((error) => {
		console.error('Ошибка при создании таблицы пользователей:', error);
	});

module.exports = Users;