import React from "react";

class Cards extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false,
		};
	}

	render() {
		return (
			<div className="card">
				<img src={this.props.info.img} alt={"Image" + this.props.info.id} />
			</div>
		);
	}
}

export default Cards;
