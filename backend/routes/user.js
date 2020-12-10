import express from 'express';
import { authUser, getUserProfile } from '../controllers/user.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.post('/login', authUser);

router.get('/profile', auth, getUserProfile);

export default router;
