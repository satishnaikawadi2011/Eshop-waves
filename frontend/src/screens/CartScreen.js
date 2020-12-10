import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { addToCart } from '../redux/actions/cart';

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id;

	const qty =
		location.search ? Number(location.search.split('=')[1]) :
		1;

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	useEffect(
		() => {
			if (productId) {
				dispatch(addToCart(productId, qty));
			}
		},
		[
			dispatch,
			productId,
			qty
		]
	);
	const removeFromCarthandler = () => {};
	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{
					cartItems.length === 0 ? <Message>
						Your cart is empty <Link to="/">Go Back</Link>
					</Message> :
					<ListGroup variant="flush">
						{cartItems.map((item) => {
							return (
								<ListGroup.Item key={item.product}>
									<Row>
										<Col md={2}>
											<Image src={item.image} alt={item.name} fluid rounded />
										</Col>
										<Col md={3}>
											<Link to={`/api/products/${item.product}`}>{item.name}</Link>
										</Col>
										<Col md={2}>${item.price}</Col>
										<Col md={2}>
											<Form.Control
												as="select"
												value={qty}
												onChange={(e) =>
													dispatch(addToCart(item.product, Number(e.target.value)))}
											>
												{[
													...Array(item.countInStock).keys()
												].map((x) => {
													return <option key={x + 1}>{x + 1}</option>;
												})}
											</Form.Control>
										</Col>
										<Col md={2}>
											<Button
												type="button"
												varianr="light"
												onClick={() => removeFromCarthandler(item.product)}
											>
												<i className="fas fa-trash" />
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							);
						})}
					</ListGroup>}
			</Col>
			<Col md={2} />
			<Col md={2} />
		</Row>
	);
};

export default CartScreen;
