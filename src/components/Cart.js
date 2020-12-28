import React, { Component } from 'react';
import formatCurrency from './../util';

export default class Cart extends Component {
	render() {
		const { cartItems } = this.props;
		return (
			<div>
				{cartItems.length === 0 ? (
					<div className='cart cart-header'>Carrito Vacio</div>
				) : (
					<div className='cart cart-header'>
						{cartItems.length} productos en el carrito {''}
					</div>
				)}
				<div>
					<div className='cart'>
						<ul className='cart-items'>
							{cartItems.map((item) => (
								<li key={item._id}>
									<div>
										<img src={item.image} alt={item.title}></img>
									</div>
									<div>{item.title}</div>
									<div clasName='right'>
										{formatCurrency(item.price)} x {item.count}{' '}
										<button
											className='button'
											onClick={() => this.props.removeFromCart(item)}
										>
											Eliminar
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
					{cartItems.length !== 0 && (
						<div className='cart'>
							<div className='total'>
								<div>
									Total:{' '}
									{formatCurrency(
										cartItems.reduce((a, c) => a + c.price * c.count, 0)
									)}
								</div>
								<button className='button primary'>continuar</button>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}