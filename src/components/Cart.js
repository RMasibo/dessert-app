import React, { Component } from "react";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import PropTypes from "prop-types";
import { Consumer } from "./Context";
import { Link } from "react-router-dom";

class Cart extends Component {
	onDeleteClick = (id, dispatch) => {
		dispatch({ type: "DELETE_DESSERT", payload: id });
	};

	onAddClick = (id, dispatch) => {
		dispatch({ type: "ADD_MORE", payload: id });
	};

	onRemoveClick = (id, dispatch) => {
		dispatch({ type: "REMOVE_DESSERT", payload: id });
	};

	handleSubmitOrder = (dispatch) => {
		dispatch({ type: "CONFIRM_CART" });
		this.props.onSubmitOrder();
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { cart, dispatch, total } = value;

					return (
						<div className="side-bar">
							<header>
								<h2 className="cart">Cart</h2>
							</header>

							<div className="dessert-in-cart">
								{cart.length > 0 ? (
									cart.map((dessert) => (
										<div className="cart-item" key={dessert.id}>
											<div className="item-counter">
												<p>{dessert.quantity}x</p>
											</div>
											<div className="item-details">
												<h4>{dessert.name}</h4>
												<h6>${dessert.amount * dessert.quantity}</h6>
											</div>
											<div className="btn-group">
												<button
													className="item-btns"
													onClick={() => this.onAddClick(dessert.id, dispatch)}
												>
													<MdAdd size={16} />
												</button>

												<button
													className="item-btns"
													onClick={() =>
														this.onRemoveClick(dessert.id, dispatch)
													}
												>
													<MdRemove size={16} />
												</button>

												<button
													className="item-btns"
													onClick={() =>
														this.onDeleteClick(dessert.id, dispatch)
													}
												>
													<MdDelete size={16} />
												</button>
											</div>
										</div>
									))
								) : (
									<p>Your cart is empty!!</p>
								)}
							</div>

							<div className="total">
								<h5 className="bill">Total Order: $ {total}</h5>
							</div>

							<button
								className="confirm-btn"
								onClick={() => this.handleSubmitOrder(dispatch)}
							>
								<Link to="/alert" className="link">
									Confirm
								</Link>
							</button>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Cart.propTypes = {
	onSubmitOrder: PropTypes.func.isRequired,
};

export default Cart;
