import React, { Component } from "react";
import shallowCompare from "react-addons-shallow-compare";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pageActions from "../redux/actions/pageActions";

import Icon from "./Icon";

import classNames from "classnames";

import "../styles/header.css";

class Header extends Component {

	constructor(){
		super();

		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
	}



	componentDidMount(){
		// this.props.pageActions.showSiteMode(true);

	}

	componentWillReceiveProps( props ){
		console.log("componentWillReceiveProps showSiteMode", props.page.showSiteMode)
	}

	handleDrawerOpen(){
		this.props.pageActions.toggleDrawer("open");

		return false;
	}

	getMenuItems(){
		return [
			{href: "tel:88005553535", label: "8 (800) 555-35-35", icon: "phone"},
			{href: "https://remedis.ru/faq/", label: "Помощь", icon: "help-circle"},
			{href: "https://system.remedis.ru/login", label: "Войти", icon: "login"},
		];
	}

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	render(){
		let menu = this.getMenuItems();

		let className = classNames({
			"header": true,
			"header--light": true,
			"show-site-mode": this.props.page.showSiteMode,
			"show-site-mode--showed": this.props.page.showSiteMode && this.props.page.showedSite
		});

		return (
			<header className={className}>

				<div className="wrapper wrapper--centered">

					<div className="header__start">

						<ul className="header__nav">
							<li>
								<a href="#" className="header__open-drawer-link" onClick={this.handleDrawerOpen}>
									<span className="icon icon__custom icon__custom--burger">
										<i/>
										<i/>
										<i/>
									</span>

									<span className="header__nav__label">Меню</span>
								</a>
							</li>
						</ul>

					</div>


					<div className="header__end">
						<ul className="header__nav">

							{menu.map( (value, index) => {
								return (
									<li key={index}>
											<a href={value.href}>
												<span className="icon">
													<Icon name={value.icon}/>
												</span>

												<span className="header__nav__label">
													{value.label}
												</span>
											</a>
									</li>
								);
							} )}

						</ul>
					</div>


				</div>

			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		page: state.page
	}
};

const mapDispatchesToProps = (dispatch) => {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchesToProps)(Header);