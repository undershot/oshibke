import React, { Component } from "react";
import { Router, Route, IndexRoute } from "react-router";

import App from "./App";

import MainSearch from "./pages/MainSearch";
import Contacts from "./pages/Contacts";

class Routes extends Component {
	render(){
		/*this.props.globalStore.dispatch({
		 type: "ADD_TRACK",
		 asasd
		 payload: "13 23 12312 3"
		 });*/

		return (
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					<IndexRoute component={MainSearch} />

					<Route path="contacts" component={Contacts} />
				</Route>
				{/*<Route path='*' component={NotFound} />*/}

			</Router>
		);
	}
}

export default Routes;
