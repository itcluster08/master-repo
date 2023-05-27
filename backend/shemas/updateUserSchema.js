module.exports = {
	schema: {
		body: {
			type: 'object',
			properties: {
                userId: { type: 'string' },
				firstName: { type: 'string', minLength: 3 },
				secondName: { type: 'string', minLength: 3 }
			},
			required: ['firstName', 'secondName', 'userId']
		}
	}
}