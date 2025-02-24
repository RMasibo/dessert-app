import React, { Component } from "react";
import Confirm from "./Confirm";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";
import PropTypes from "prop-types";

class Alert extends Component {
	handleClose = (dispatch) => {
		dispatch({ type: "CLEAR_CART" });
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;

					return (
						<div className="overlay">
							<div className="alertBox">
								<Confirm />
								<button
									className="alertClose"
									onClick={() => this.handleClose(dispatch)}
								>
									<Link to="/" className="link">
										New Order
									</Link>
								</button>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Alert.propTypes = {
	handleClose: PropTypes.func.isRequired,
};

export default Alert;
