import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">E-Shop Waves</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/cart">
								<i className="fas fa-shopping-cart mx-2" />Cart
							</Nav.Link>
							<Nav.Link href="/login">
								<i className="fas fa-user mx-2" />Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
