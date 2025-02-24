import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_DESSERT" /*bin button*/:
			return {
				cart: state.cart.filter((dessert) => dessert.id !== action.payload),
				total: state.cart.reduce(
					(total, item) => total + item.amount * item.quantity,
					0
				),
			};

		case "ADD_DESSERT" /*add to cart button*/:
			const dessertToAdd = state.desserts.find(
				(dessert) => dessert.id === action.payload
			);

			const dessertInCart = state.cart.find(
				(dessert) => dessert.id === action.payload
			); /*checking if the dessert is added in cart */

			if (dessertInCart) {
				return state; /*returnin the same state without any changes */
			}

			const newCart = [{ ...dessertToAdd, quantity: 1 }, ...state.cart];
			return {
				...state,
				cart: newCart,
				total: newCart.reduce(
					(total, item) => total + item.amount * item.quantity,
					0
				),
			};

		case "ADD_MORE" /*plus button*/:
			const updatedCart = state.cart.map((dessert) =>
				dessert.id === action.payload
					? { ...dessert, quantity: dessert.quantity + 1 }
					: dessert
			);
			return {
				...state,
				cart: updatedCart,
				total: updatedCart.reduce(
					(total, item) => total + item.amount * item.quantity,
					0
				),
			};

		case "REMOVE_DESSERT" /*minus button*/:
			const reducedCart = state.cart.map((dessert) =>
				dessert.id === action.payload
					? { ...dessert, quantity: dessert.quantity - 1 }
					: dessert
			);
			const reducedCarts = reducedCart.filter(
				(dessert) => dessert.quantity > 0
			); /*removing completetly any dessert that is 0 and below*/
			return {
				...state,
				cart: reducedCarts,
				total: reducedCarts.reduce(
					(total, item) => total + item.amount * item.quantity,
					0
				),
			};

		case "TOTAL_CART":
			const totalAmount = state.cart.reduce(
				(total, item) => total + item.amount * item.quantity,
				0
			);
			return {
				...state,
				total: totalAmount,
			};

		case "CONFIRM_CART":
			return {
				...state,
				total: state.cart.reduce(
					(total, item) => total + item.amount * item.quantity,
					0
				),
			};

		case "CLEAR_CART":
			return {
				...state,
				cart: [],
				total: 0,
			};

		default:
			return state;
	}
};

const initialState = {
	desserts: [
		{
			id: "1",
			imageSrc: "./assets/d2.jpeg",
			name: "Chocolate Caramel",
			amount: 6.0,
		},
		{
			id: "2",
			imageSrc: "./assets/d3.jpeg",
			name: "Vanilla Delight",
			amount: 5.0,
		},
		{
			id: "3",
			imageSrc: "./assets/d4.jpeg",
			name: "Strawberry Swirl",
			amount: 6.5,
		},
		{
			id: "4",
			imageSrc: "./assets/d5.jpeg",
			name: "Ice-cream Bowl",
			amount: 4.5,
		},
		{
			id: "5",
			imageSrc: "./assets/d6.jpeg",
			name: "Nutty Brownie",
			amount: 5.5,
		},
		{
			id: "6",
			imageSrc: "./assets/d7.jpeg",
			name: "Choco-chip Cookies",
			amount: 7.5,
		},
		{
			id: "7",
			imageSrc: "./assets/d8.jpeg",
			name: "Cheesy Puffs",
			amount: 7.5,
		},
		{
			id: "8",
			imageSrc: "./assets/d9.jpeg",
			name: "Cinamon Rolls",
			amount: 7.5,
		},
		{
			id: "9",
			imageSrc: "./assets/d10.jpeg",
			name: "Jam Staffed Pie",
			amount: 7.5,
		},
	],
	cart: [],
	total: 0,
	hero: {
		title: "Cake pops",
		imageSrc: "./assets/d8.jpg",
	},
};

export class Provider extends Component {
	state = initialState;

	dispatch = (action) => {
		this.setState((state) => reducer(state, action));
	};

	render() {
		return (
			<Context.Provider value={{ ...this.state, dispatch: this.dispatch }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
export const ContextValue = Context;
