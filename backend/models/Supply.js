const connection = require('./connector');
const { DataTypes } = require('sequelize')
const Food = connection.define('Food', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		unique: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING(255),
		allowNull: false
	},
	category: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	countInStock: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	restockDay: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
})

Food.sync({ force: false })
	.then(() => {
		console.log('Таблица еды создана.');
	})
	.catch((error) => {
		console.error('Ошибка при создании таблицы еды:', error);
	});

module.exports = Food;