import React, { Component } from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pageActions from "../redux/actions/pageActions";

import Icon from "../components/Icon";
import SearchInput from "../components/SearchInput";

import classNames from "classnames";

class Search extends Component {

	render(){
		let className = classNames({
			"wrapper__search-input": true,
			"show-site-mode": this.props.page.showSiteMode,
			"show-site-mode--showed": this.props.page.showSiteMode && this.props.page.showedSite
		});

		return (
			<div className={className}>

				<SearchInput focused={this.props.page.showSiteMode && this.props.page.showedSite} />

				<button className="button button__search">
					<Icon name="magnify" className="icon__search"/>
				</button>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page
	}
};

const mapDispatchesToProps = (dispatch) => {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchesToProps)(Search);