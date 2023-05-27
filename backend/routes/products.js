const { loginUserSchema, registerUserSchema } = require("../shemas");
const { Users, Food, FoodFromFarmer } = require("../models");

async function routes(fastify, options) {

	fastify.get('/admin', async (request, reply) => {
		const users = await Users.count();
		const farmers = await Users.count({ where: { role: 'SELLER' }});
		const products = await Food.count()
		const _products = await Food.findAll()
		const lots = await FoodFromFarmer.count()
		

		const products_count = _products.reduce((a, b) => a + b.countInStock, 0);
		return {
			users,
			products,
			farmers,
			products_count
		};
	})

	fastify.get('/allusers', async (request, reply) => {
		const users = await Users.findAll();
		return users;
	})

	fastify.get('/products', async (request, reply) => {
		const products = await Food.findAll();
		return products;
	})

	fastify.post('/marketplace', async (request, reply) => {
		const product = await FoodFromFarmer.create({
			farmerId: request.body.farmerId,
			foodId: request.body.foodId,
			destinationTime: Date.now() + (1000 * 60 * 60 * 24) * Math.round(Math.random() * 14 + 1),
			count: request.body.count,

		})
		return product;
	})


	fastify.get('/farmerproducts', async (request, reply) => {
		const products = await FoodFromFarmer.findAll({
			where: {
				farmerId: request.query.farmerId
			},
			include: [Food]
		});
		return products;
	})



	fastify.get('/shopper', async (request, reply) => {
		const { userId } = request.query;
		const user = await Users.findByPk(userId);
		if (!user.shopper.items) user.shopper.items = [];
		return user.shopper;
	})


	fastify.post('/addtouser', async (request, reply) => {
		const { userId, product, count } = request.body;

		const user = await Users.findByPk(userId);
		console.log(user.shopper)
		if (!user.shopper?.items) {
			console.log('first')
			user.shopper = {
				items: [{
					product,
					count
				}]
			}
		} else {
			console.log('second')
			user.shopper.items.push({
				product,
				count
			})
		}

		user.changed("shopper", true)
		await user.save();
	})

	fastify.post('/removefromuser', async (request, reply) => {
		const { userId, position } = request.body;

		const user = await Users.findByPk(userId);
		console.log(user.shopper)
		user.shopper.items.splice(position, 1)
		console.log(user.shopper)

		user.changed("shopper", true)
		await user.save();
	})

}

module.exports = routes;
