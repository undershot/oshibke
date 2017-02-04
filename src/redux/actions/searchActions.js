import {SEARCH_FETCHING} from "../constants/Search.js";

export function setSearchFetching() {
	return {
		type: SEARCH_FETCHING,
		payload: true
	}
}