import './bootstrap.min.css';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<main className="py-3">
					<Container>
						<Route path="/login" component={LoginScreen} />
						<Route exact path="/" component={HomeScreen} />
						<Route path="/product/:id" component={ProductScreen} />
						<Route path="/cart/:id?" component={CartScreen} />
					</Container>
				</main>
				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
