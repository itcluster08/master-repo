const connection = require('./connector');
const { DataTypes } = require('sequelize')
const Seller = connection.define('Seller', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		unique: true,
		allowNull: false,
		primaryKey: true
	},
	userId: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: true
	},
	name: {
		type: DataTypes.STRING(255),
		allowNull: false,
		defaultValue: 'Добрый Чеченец'
	}
})

Seller.sync({ force: false })
	.then(() => {
		console.log('Таблица продавцов создана.');
	})
	.catch((error) => {
		console.error('Ошибка при создании таблицы продавцов:', error);
	});

module.exports = Seller;