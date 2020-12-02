//feature 1
import React from 'react';
import data from './data.json';
import Products from './components/Products';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: data.products,
			size: '',
			sort: '',
		};
	}
	render() {
		return (
			<div className='grid-container'>
				<header>
					<a href='/'>Carrito de Compras</a>
				</header>
				<main>
					<div className='content'>
						<div className='main'>productos</div>
						<Products products={this.state.products}></Products>
						<div className='sidebar'>items del carrito</div>
					</div>
				</main>
				<footer>Todos los derechos reservados.</footer>
			</div>
		);
	}
}

export default App;
