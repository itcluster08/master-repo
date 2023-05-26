require('dotenv').config()

const cors = require('@fastify/cors');
const fastify = require('fastify')({ logger: false });
const autoload = require('@fastify/autoload')


fastify.register(require('@fastify/formbody'))
fastify.register(cors, {
	origin: (origin, cb) => {
		cb(null, true)
	}
})

fastify.register(autoload, {
	dir: require('path').join(__dirname, 'routes')
})

fastify.get('/', async (request, reply) => {
	return { message: 'Hello! API is operating.' }
})

const start = async () => {
	try {
		await fastify.listen({ port: 5400 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()