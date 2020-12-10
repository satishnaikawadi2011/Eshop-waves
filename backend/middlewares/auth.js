import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';

export default expressAsyncHandler(async function(req, res, next) {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = await jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			res.status(401);
			throw new Error('Invalid token!');
		}
	}
	else {
		res.status(401);
		throw new Error('Not authenticated or No token provided!');
	}
});
