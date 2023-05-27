const Users = require('./Users');
const Food = require('./Supply');
const FoodFromFarmer = require('./FarmerSupply');


FoodFromFarmer.hasOne(Food, {
	foreignKey: 'id',
	sourceKey: 'foodId'
})
module.exports = {
	Users,
	Food,
	FoodFromFarmer: FoodFromFarmer
}