import React from "react";
import "./Card.css";

class Card extends React.Component {
	render() {
		return (
			<div className="card" onClick={this.props.selectCard}>
				<img
					src={this.props.info.img}
					alt={"Image" + this.props.info.id}
					id={"Image" + this.props.info.id}
				/>
			</div>
		);
	}
}

export default Card;
