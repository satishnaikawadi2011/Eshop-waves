import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/products';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;
	useEffect(
		() => {
			dispatch(listProducts());
		},
		[
			dispatch
		]
	);
	return (
		<React.Fragment>
			<h1>Latest Products</h1>
			{
				loading ? <Loader /> :
				error ? <Message variant="danger">{error}</Message> :
				<Row>
					{products.map((product) => {
						return (
							<Col key={product._id} sm={12} md={6} xl={3}>
								<Product product={product} />
							</Col>
						);
					})}
				</Row>}
		</React.Fragment>
	);
};

export default HomeScreen;
