import {
	SET_TITLE, FETCH_TITLE, LOAD_TITLE, CLOSE_DRAWER, OPEN_DRAWER, MAIN_SHOW_SITE,
	SET_SHOW_SITE_MODE
} from "../constants/Page";

const initialState = {
	title: "test",
	fetching: false,
	drawerOpened: false,
	showSiteMode: false,
	showedSite: false,
	showFooterMenu: true
};

export default function pageState( state = initialState, action ) {

	switch( action.type ){
		case SET_TITLE: return {
			...state,
			title: action.payload
		};

		case FETCH_TITLE: return {
			...state,
			fetching: true
		};

		case LOAD_TITLE: return {
			...state,
			fetching: false,
			title: action.payload
		};

		case OPEN_DRAWER: return {
			...state,
			drawerOpened: true
		};

		case CLOSE_DRAWER: return {
			...state,
			drawerOpened: false
		};

		case SET_SHOW_SITE_MODE: return {
			...state,
			showedSiteMode: action.payload
		};

		case MAIN_SHOW_SITE: return {
			...state,
			showedSite: true
		};

		default: return state;
	}
}