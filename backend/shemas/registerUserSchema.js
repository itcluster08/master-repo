module.exports = {
	schema: {
		body: {
			type: 'object',
			properties: {
				username: { type: 'string', minLength: 3 },
				password: { type: 'string', minLength: 6 },
				firstName: { type: 'string', minLength: 3 },
				secondName: { type: 'string', minLength: 3 },
				role: { type: 'string'}
			},
			required: ['username', 'password', 'firstName', 'secondName']
		}
	}
}