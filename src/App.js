import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart,item]);
		// add the given item to the cart
	};
	const removeItem = item =>{
		const cartArr = cart;
		console.log('cartArr in remove item function',cartArr)
		cartArr.slice(item.id)
		setCart(cartArr)
	}
console.log('cart in app.js',cart);
	return (
		
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart}}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products  />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={{cart, removeItem}} />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
		
	);
}

export default App;
