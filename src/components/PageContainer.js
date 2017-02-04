import React, { Component } from "react";

import classNames from "classnames";

import "../styles/pages.css";


class PageContainer extends Component {

	static defaultProps = {
		pageContent: null
	};

	componentDidMount(){

	}

	render(){

		let className = classNames({
			"container__page": true,
			"container__page--drawer-stacked": this.props.page.drawerOpened
			// "container__page--drawer-stacked": this.props.page.drawerOpened
		});


		return (
			<div className={className}>


				{this.props.pageContent}


			</div>
		);
	}
}

export default PageContainer;