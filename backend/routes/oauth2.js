const { loginUserSchema, registerUserSchema, updateUserSchema } = require("../shemas");
const { Users } = require("../models");

async function routes(fastify, options) {
	fastify.get('/user', async (request, reply) => {
		const { userId } = request.query;
		const user = await Users.findByPk(userId);
		return user;
	})

	fastify.post('/login', loginUserSchema, async (request, reply) => {
		try {
			const user = await Users.findOne({
				where: {
					username: request.body.username,
					password: request.body.password
				}
			})
	
			if (!user) return {
				statusCode: 404,
				code: "ERR_WRONG_LOGIN",
				message: "No user with this login and password found"
			}

			return user;
		} catch (e) {

		}
	})

	fastify.post('/register', registerUserSchema, async (request, reply) => {
		try {
			const user = await Users.create({
				username: request.body.username,
				password: request.body.password,
				firstName: request.body.firstName,
				secondName: request.body.secondName,
			})
			return user;
		} catch (e) {
			if (e.errors[0].type === 'unique violation') return {
				statusCode: 500,
				code: "ERR_ALREADY_EXITS",
				message: "User with that username already exits"
			}
		}
	})


	fastify.post('/role', async (request, reply) => {
		const user = await Users.findByPk(request.body.userId);
		if (request.body.role) {
			await user.update({
				role: request.body.role
			});
			return user;
		}
	})
	fastify.post('/update', updateUserSchema, async (request, reply) => {
			const user = await Users.findByPk(request.body.userId);
			if (user) {
				await user.update({
					firstName: request.body.firstName,
					secondName: request.body.secondName,
					card_number: request.body.card_number,
					role: request.body.role
				});
			}

			return user;
	})
}

module.exports = routes;
