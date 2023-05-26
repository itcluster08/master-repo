const cors = require('@fastify/cors');
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
		await fastify.listen({ port: 5400, host: '192.168.88.202' })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()