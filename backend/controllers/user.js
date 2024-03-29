import User from '../models/user.js';
import expressAsyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

export const authUser = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id     : user._id,
			name    : user.name,
			email   : user.email,
			isAdmin : user.isAdmin,
			token   : generateToken(user._id)
		});
	}
	else {
		res.status(401);
		throw new Error('Invalid email or password !!!');
	}
});

export const getUserProfile = expressAsyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id     : user._id,
			name    : user.name,
			email   : user.email,
			isAdmin : user.isAdmin
		});
	}
	else {
		res.status(404);
		throw new Error('User not found!');
	}
});

export const registerUser = expressAsyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists,try another email or login instaed!');
	}

	const user = await User.create({
		name,
		email,
		password
	});

	if (user) {
		res.status(201);
		res.json({
			_id     : user._id,
			name    : user.name,
			email   : user.email,
			isAdmin : user.isAdmin,
			token   : generateToken(user._id)
		});
	}
	else {
		res.json(400);
		throw new Error('Invalid user data');
	}
});
