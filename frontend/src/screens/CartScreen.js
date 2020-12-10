import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { addToCart, removeFromCart } from '../redux/actions/cart';

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
	const getTotalItems = (cartItems) => {
		let count = 0;
		cartItems.forEach((item) => {
			count += item.qty;
		});

		return count;
	};

	const getTotalPrice = (cartItems) => {
		let price = 0;
		cartItems.forEach((item) => {
			price += item.qty * item.price;
		});

		return price;
	};
	const checkoutHandler = () => {
		history.push('/login?redirect=shipping');
	};
	const removeFromCarthandler = (id) => {
		dispatch(removeFromCart(id));
	};
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
												value={item.qty}
												onChange={(e) =>
													dispatch(addToCart(item.product, Number(e.target.value)))}
											>
												{[
													...Array(item.countInStock).keys()
												].map((x) => {
													return (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													);
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
			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Subtotal ({getTotalItems(cartItems)}) items</h2>
							${getTotalPrice(cartItems).toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								as="button"
								className="btn btn-block"
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed To Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
};

export default CartScreen;
