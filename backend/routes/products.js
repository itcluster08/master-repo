const { loginUserSchema, registerUserSchema } = require("../shemas");
const { Users, Food } = require("../models");

async function routes(fastify, options) {
	fastify.get('/products', async (request, reply) => {
		const products = await Food.findAll();
		return products;
	})

}

module.exports = routes;
