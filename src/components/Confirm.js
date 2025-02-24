import React, { Component } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { Consumer } from "./Context";

export default class Confirm extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { cart, total } = value;

					return (
						<div className="confirm">
							{cart.length === 0 ? (
								<p>There are no desserts in your cart!</p>
							) : (
								<div>
									<div className="confirm-title">
										<MdCheckCircleOutline size={30} color="blue" />
										<h1>Order Confirmed</h1>
										<h6>We hope you enjoy your food!</h6>
									</div>
									<div className="confirmed-desserts">
										{cart.map((dessert) => (
											<div key={dessert.id} className="confirmed-dessert">
												<img src={dessert.imageSrc} alt={dessert.name} />
												<div className="confirmed-item">
													<h2>{dessert.name}</h2>
													<h3>
														{dessert.quantity} x ${dessert.amount}
													</h3>
												</div>
											</div>
										))}
										<h4>Total Order: $ {total}</h4>
									</div>
								</div>
							)}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Confirm.propTypes = {};
