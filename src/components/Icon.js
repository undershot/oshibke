import React, {Component} from "react";
import classNames from "classnames";

class Icon extends Component {

	static defaultProps = {
		set: "mdi",
		name: false,
		className: false
	};

	shouldComponentUpdate(){
		return false;
	}

	render(){
		let className = classNames(
			`${this.props.set} ${this.props.set}-${this.props.name}`,
			this.props.className
		);

		return (
			<i className={className} />
		);
	}
}

export default Icon;
