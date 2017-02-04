import React, { Component } from "react";

class SearchInput extends Component {

	static defaultProps = {
		focused: false
	};

	constructor(){
		super();

		this.handleSearchKeydown = this.handleSearchKeydown.bind(this);
	}

	componentDidMount(){
		// if( this.props.focused ) this.refs.search.focus();

		// alert(this.props.focused);
	}

	componentWillReceiveProps(newProps){

		if( newProps.focused ) this.refs.search.focus();

	}

	handleSearchKeydown(event){

	}

	render(){
		return (
			<input type="text" ref="search" className="textfield textfield__search" placeholder="Введите диагноз" onKeyDown={this.handleSearchKeydown}/>
		);
	}
}

export default SearchInput;