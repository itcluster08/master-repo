const cors = require('@fastify/cors');
require('dotenv').config()
const fastify = require('fastify')({ logger: true });
fastify.register(cors, {
	origin: (origin, cb) => {
		const hostname = new URL(origin).hostname
		cb(null, true)
		return
	}
})

// Declare a route
fastify.get('/', async (request, reply) => {
	return { hello: 'world' }
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen({ port: 5400 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()