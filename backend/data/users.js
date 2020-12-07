import bcrypt from 'bcryptjs';

const users = [
	{
		name     : 'adminUser',
		email    : 'admin@example.com',
		password : bcrypt.hashSync('123456', 10),
		isAdmin  : true
	},

	{
		name     : 'john doe',
		email    : 'john@example.com',
		password : bcrypt.hashSync('123456', 10)
	},

	{
		name     : 'peter parker',
		email    : 'peter@example.com',
		password : bcrypt.hashSync('123456', 10)
	}
];

export default users;
