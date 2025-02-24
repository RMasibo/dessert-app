import React, { Component } from "react";
import Dessert from "./Dessert";
import Cart from "./Cart";
import Hero from "./Hero";
import { Consumer } from "./Context";

export default class Desserts extends Component {
	addToCart = (id, dispatch) => {
		dispatch({ type: "ADD_DESSERT", payload: id });
	};

	handleSubmitOrder = () => {
		console.log("Order Submitted");
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { desserts, dispatch } = value;
					return (
						<React.Fragment>
							<Hero />
							<div className="body">
								<div className="dessert-side">
									{desserts.map((dessert) => (
										<Dessert
											key={dessert.id}
											imageSrc={dessert.imageSrc}
											name={dessert.name}
											amount={dessert.amount}
											onAddToCart={() => this.addToCart(dessert.id, dispatch)}
										/>
									))}
								</div>

								<div>
									<Cart
										onSubmitOrder={() => this.handleSubmitOrder(dispatch)}
									/>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}
