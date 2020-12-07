import express from 'express';
import connectDB from './config/db.js';

import productRouter from './routes/products.js';

import dotenv from 'dotenv';
dotenv.config();

connectDB();

const app = express();

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
	res.send('API is running......');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`));
