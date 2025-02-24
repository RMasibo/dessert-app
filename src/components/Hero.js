import React, { Component } from "react";
import { Consumer } from "./Context";

export default class Hero extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { hero } = value;
					return (
						<div className="hero">
							<img className="heroImg" src={hero.imageSrc} alt={hero.title} />
						</div>
					);
				}}
			</Consumer>
		);
	}
}
