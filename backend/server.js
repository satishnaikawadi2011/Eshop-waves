import express from 'express';
import connectDB from './config/db.js';

import productRouter from './routes/products.js';
import userRouter from './routes/user.js';

import dotenv from 'dotenv';
import { errorHandler, notFount } from './middlewares/errorHandler.js';
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
	res.send('API is running......');
});

app.use(notFount);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`));
