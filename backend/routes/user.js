import express from 'express';
import { authUser, getUserProfile, registerUser } from '../controllers/user.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.post('/login', authUser);

router.get('/profile', auth, getUserProfile);

router.post('/register', registerUser);

export default router;
