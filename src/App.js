import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Desserts from "./components/Desserts";
import Header from "./components/Header";
import Alert from "./components/Alert";
import { Provider } from "./components/Context";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
	return (
		<Provider>
			<Router>
				<div className="App">
					<Header branding="Desserts" />
					<Routes>
						<Route exact path="/" Component={Desserts} />
						<Route exact path="/about" Component={About} />
						<Route exact path="/alert" Component={Alert} />
						<Route exact path="#" Component={NotFound} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
