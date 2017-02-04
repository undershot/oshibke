import {SEARCH_FETCHING} from "../constants/Search";

const initialState = {
	fetching: false,
	searchTyped: false,
	searchedData: false,
};

export default function getSearchState(state = initialState, action) {
	switch( action.type ){
		case SEARCH_FETCHING: return {
			...state,
			fetching: true
		};

		default: return state;
	}
};