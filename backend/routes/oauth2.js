const { loginUserSchema, registerUserSchema } = require("../shemas");
const { Users } = require("../models");

async function routes(fastify, options) {
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
				password: request.body.password
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
}

module.exports = routes;
