import React, { Component } from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import * as pageActions from "../redux/actions/pageActions";

import Image from "./Image";

class AnimatedLogo extends Component {

	constructor(){
		super();

		this.logoIconCallback = this.logoIconCallback.bind(this);
		this.logoPulseCallback = this.logoPulseCallback.bind(this);
		this.logoTextCallback = this.logoTextCallback.bind(this);
	}

	loaded = [];

	pushIntoLoaded(event){
		this.loaded.push( event.target );
	}

	logoIconCallback(status, event) {
		if( status === "loaded" ){
			this.pushIntoLoaded( event );
		}
	}

	logoPulseCallback(status, event) {
		if( status === "loaded" ){
			this.pushIntoLoaded( event );
		}
	}

	logoTextCallback(status, event){
		if( status === "loaded" ){
			this.pushIntoLoaded( event );

			this.runAnimations();
		}
	}

	runAnimations( i = 0 ){
		if( this.loaded.length < 3 ) {

			if( i < 10 ){
				setTimeout( () => {
					this.runAnimations( i+1 );
				}, 300);
			} else {
				window.location.reload();
			}

			return false;
		}

		this.refs.crossWrapper.classList.add("loaded");

		setTimeout( () => {
			this.refs.pulseWrapper.classList.add("loaded");

			this.refs.crossWrapper.classList.add("pulse-loaded");

			setTimeout( () => {
				this.refs.textWrapper.classList.add("loaded");
				this.refs.logoWrapper.classList.add("loaded");

				this.props.pageActions.showSite();
			}, 1200);
		}, 300 );
	}

	render(){
		return (
				<div className="logo--animated" ref="logoWrapper">
					<div ref="crossWrapper" className="logo--animated__cross-wrapper">
						<Image src="http://oshibke.net/assets/img/logo-icon.png" ref="cross" className="logo--animated__cross" callback={this.logoIconCallback} />

						<div ref="pulseWrapper" className="logo--animated__pulse-wrapper">
							<Image src="http://oshibke.net/assets/img/logo-icon-m.png" className="logo--animated__pulse" callback={this.logoPulseCallback} />
						</div>
					</div>

					<div ref="textWrapper" className="logo--animated__text-wrapper">
						<Image src="http://oshibke.net/assets/img/logo-text.png" className="logo--animated__text" callback={this.logoTextCallback} />
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


export default connect(mapStateToProps, mapDispatchToProps)(AnimatedLogo);