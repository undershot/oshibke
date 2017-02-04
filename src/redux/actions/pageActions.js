import {
	SET_TITLE, FETCH_TITLE, LOAD_TITLE, CLOSE_DRAWER, OPEN_DRAWER, MAIN_SHOW_SITE,
	SET_SHOW_SITE_MODE
} from "../constants/Page";

export function setTitle( title ) {
	return {
		type: SET_TITLE,
		payload: title
	}
}

export function getData( data ) {
	return (dispatch) => {
		dispatch({
			type: FETCH_TITLE,
			payload: {}
		});

		setTimeout( () => {
			dispatch({
				type: LOAD_TITLE,
				payload: "new TITLE"
			});
		}, 1000 );
	}
}

export function toggleDrawer( action = "open" ) {
	return {
		type: action === "open" ? OPEN_DRAWER : CLOSE_DRAWER
	};
}

export function showSite() {
	return {
		type: MAIN_SHOW_SITE
	};
}

export function showSiteMode( mode = true ) {
	return {
		type: SET_SHOW_SITE_MODE,
		payload: mode
	};
}