import React from "react";

class Cards extends React.Component {
	render() {
		return (
			<div className="card" style={{ height: "350px", width: "200px" }}>
				<img
					src={this.props.info.img}
					style={{
						margin: "5px",
						maxWidth: "265px",
						maxHeight: "265px",
						borderRadius: "15px",
					}}
					alt="Image"
				/>
			</div>
		);
	}
}

export default Cards;
