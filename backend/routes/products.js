const { loginUserSchema, registerUserSchema } = require("../shemas");
const { Users, Food } = require("../models");

async function routes(fastify, options) {
	fastify.get('/products', async (request, reply) => {
		const products = await Food.findAll();
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
