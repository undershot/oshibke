import React, { Component } from "react";

import Icon from "./Icon";

import classNames from "classnames";

import "../styles/footer.css";

class Footer extends Component {

	getMenuList(){
		return [
			{
				href: "#",
				label: "Врач",
				icon: <Icon name="pulse-line" set="medical" className="footer__nav-icons__icon footer__nav-icons__icon--pulse"/>
			},
			{
				href: "#",
				label: "Личный помощник",
				icon: <Icon name="tie" className="footer__nav-icons__icon"/>
			},
			{
				href: "#",
				label: "Фармацевт",
				icon: <Icon name="medical-pill" set="medical" className="footer__nav-icons__icon"/>
			},
			{
				href: "#",
				label: "Юрист",
				icon: <Icon name="scale-balanced-tool" set="medical" className="footer__nav-icons__icon"/>
			},
			{
				href: "#",
				label: "Психолог",
				icon: <Icon name="shaking-hands" set="medical" className="footer__nav-icons__icon"/>
			},
		];

	}

	render(){
		let menu = this.getMenuList();

		let className = classNames({
			"footer": true,
			"container__page--drawer-stacked": this.props.page.drawerOpened,
			"show-site-mode": this.props.page.showSiteMode,
			"show-site-mode--showed": this.props.page.showSiteMode && this.props.page.showedSite
		});

		return (
			<footer className={className}>
				<ul className="footer__nav-icons">

					{menu.map( (value, index) => {
						return (
							<li key={index} className="footer__nav-icons__item">
								<a href={value.href} className="footer__nav-icons__link">
									{value.icon}
									<span className="footer__nav-icons__label">
										{value.label}
									</span>
								</a>
							</li>
						);
					} )}

				</ul>

				<div className="footer__copyright">
					ООО "Международный центр дистанционной диагностики" <br/>
					Медицинская деятельности осуществляется на основании лицензии №ФС-19-01-000309
				</div>

			</footer>
		);
	}
}

export default Footer;