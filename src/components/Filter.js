import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<div className='filter'>
				<div className='filter-result'>{this.props.count} Productos</div>
				<div className='filter-sort'>
					Orden{' '}
					<select value={this.props.sort} onChange={this.props.sortProducts}>
						<option>Más Nuevos</option>
						<option value='lowest'>Menor Precio</option>
						<option value='highest'>Mayor Precio</option>
					</select>
				</div>
				<div className='filter-size'>
					Filtro{' '}
					<select value={this.props.size} onChange={this.props.filterProducts}>
						<option value=''>Todos</option>
						<option value='perfumeria'>Perfumeria</option>
						<option value='accesorios'>Accesorios</option>
						<option value='medicamentos'>Medicamentos</option>
						<option value='suplementos'>Suplementos</option>
					</select>
				</div>
			</div>
		);
	}
}
