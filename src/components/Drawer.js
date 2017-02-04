import React, { Component } from "react";
import classNames from "classnames";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as pageActions from "../redux/actions/pageActions";


import "../styles/drawer.css";

class Drawer extends Component {

	static defaultProps = {
		opened: false
	};

	constructor(){
		super();

		this.handleDrawerClose = this.handleDrawerClose.bind(this);
	}

	getMenuItems(){
		return [
			// drawer-nav--active
			{href: "https://remedis.ru/about/about/", label: "О нас"},
			{href: "https://remedis.ru/howitworks/", label: "Как работает проект"},
			{href: "https://remedis.ru/partner-program/about/", label: "Партнерская программа"},
			{href: "https://remedis.ru/renews/", label: "Новости"},
			{href: "https://remedis.ru/blog/", label: "Блог"},
			{href: "https://remedis.ru/contacts/", label: "Контакты"},
		];
	}

	handleDrawerClose(){
		this.props.pageActions.toggleDrawer("close");

		return false;
	}

	render(){
		let menu = this.getMenuItems();

		let className = classNames({
			"drawer": true,
			"drawer--stacked": this.props.opened
		});

		return (
			<div className={className}>

				<div className="drawer__container">

					<div className="drawer__header">
						<ul className="header__nav drawer__header__nav">
							<li>
								<a href="#" className="drawer__close-drawer-link" onClick={this.handleDrawerClose}>
									<span className="icon icon__custom icon__custom--burger icon__custom--burger--opened">
										<i className="icon__custom--burger__first" />
										<i className="icon__custom--burger__middle" />
										<i className="icon__custom--burger__last" />
									</span>

									<span className="header__nav__label">Закрыть</span>
								</a>
							</li>
						</ul>
					</div>

					<div className="drawer__content">

						<ul className="drawer__nav">
							{menu.map( (value, index) => {
								return (
									<li key={index} className="drawer__nav-item">
										<a href={value.href} className="drawer__nav-item__link">

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

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Drawer);