import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
	return (
		<React.Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => {
					return (
						<Col sm={12} md={6} xl={3}>
							<h3>{product.name}</h3>
						</Col>
					);
				})}
			</Row>
		</React.Fragment>
	);
};

export default HomeScreen;
