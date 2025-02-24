import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dessert extends Component {
	render() {
		const { imageSrc, name, amount, onAddToCart } = this.props;

		return (
			<div className="card">
				<img src={imageSrc} alt={name} />
				<h2>{name}</h2>
				<p>${amount}</p>
				<button onClick={onAddToCart}>Add to Cart</button>
			</div>
		);
	}
}

Dessert.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	onAddToCart: PropTypes.func.isRequired,
};
