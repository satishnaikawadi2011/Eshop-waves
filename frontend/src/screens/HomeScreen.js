import React, { useState } from 'react';
import { useEffect } from 'react';
// import products from '../products';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
	const [
		products,
		setProducts
	] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};
		fetchProducts();
	}, []);
	return (
		<React.Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => {
					return (
						<Col key={product._id} sm={12} md={6} xl={3}>
							<Product product={product} />
						</Col>
					);
				})}
			</Row>
		</React.Fragment>
	);
};

export default HomeScreen;
