import React, {Component} from "react";
import classNames from "classnames";


class Image extends Component {
	static defaultProps = {
		src: "",
		className: "",
		callback: (status, event) => {}
	};

	constructor(props) {
		super(props);

		this.state = {
			className: props.className || ""
		};
		/*var obj = { a: 1 };
		 var copy = Object.assign({}, obj);
		 console.log(copy); // { a: 1 }*/
	}

	setImageStatus(status, event){
		let imgClass = classNames({
			[this.props.className]: true,
			[status]: true
		});

		if( this.props.hasOwnProperty("callback") ){
			this.props.callback(status, event);
		}

		this.setState({
			className: imgClass
		});
	}

	handleImageLoaded(event) {
		this.setImageStatus("loaded", event);
	}

	handleImageErrored(event) {
		this.setImageStatus("errored", event);
	}

	render() {
		return <img
			src={this.props.src}
			onLoad={this.handleImageLoaded.bind(this)}
			onError={this.handleImageErrored.bind(this)}
			className={ this.state.className }
			alt=""
		/>;
	}
}
export default Image;