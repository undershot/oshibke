import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import configureStore from "./redux/store/configureStore";

import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import Routes from "./Routes";


const store = configureStore();


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Routes history={history} />
	</Provider>
  ,
  document.getElementById("remedis-root")
);