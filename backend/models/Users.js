const connection = require('./connector');
const { DataTypes } = require('sequelize')
const Users = connection.define('User', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		unique: true,
		allowNull: false,
		primaryKey: truen
	},
	username: {
		type: DataTypes.STRING(30),
		unique: true,
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
	}
})