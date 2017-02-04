// ROOT REDUCER

import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import user from "./user";
import page from "./page";
import search from "./search";


export default combineReducers( {
	routing: routerReducer,
	user,
	page,
	search
} );