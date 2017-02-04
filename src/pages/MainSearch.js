import React, { Component } from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pageActions from "../redux/actions/pageActions";

import AnimatedLogo from "../components/AnimatedLogo";
import Search from "../components/Search";

class MainSearch extends Component {

	componentDidMount(){
		this.props.pageActions.showSiteMode(true);

		// console.log("showSiteMode")
	}

	componentWillReceiveProps( props ){
		// console.log("mainsearch props", props)
	}

	render(){
		return (
			<section className="container__page-inner page__main-search wrapper--full-height">
				<div className="wrapper wrapper--centered wrapper--full-height">
					<div className="block__vertical-center wrapper--full">


						<div className="block__vertical-center--inner">

							<div className="wrapper__main-search">
								<a href="/" className="logo">

									<AnimatedLogo />

								</a>
								<Search />
							</div>


						</div>
					</div>
				</div>
			</section>
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

export default connect( mapStateToProps, mapDispatchesToProps )(MainSearch);