const connection = require('./connector');
const { DataTypes, NOW } = require('sequelize')
const FoodFromFarmer = connection.define('FoodFromFarmer', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		unique: true,
		allowNull: false,
		primaryKey: true
	},
	farmerId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    foodId: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    destinationTime: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

FoodFromFarmer.sync({ force: false })
	.then(() => {
		console.log('Таблица еды фермера создана.');
	})
	.catch((error) => {
		console.error('Ошибка при создании таблицы еды фермера:', error);
	});

module.exports = FoodFromFarmer;