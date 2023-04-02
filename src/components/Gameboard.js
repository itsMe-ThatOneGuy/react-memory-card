import React from "react";
import "./Gameboard.css";
import Cards from "./Card";
import cardList from "./cardData";

class Gameboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cardList: [],
		};
	}

	componentDidMount() {
		this.setState({
			cardList: cardList,
		});
	}

	render() {
		return (
			<div className="gameboard">
				{this.state.cardList.map((e) => {
					return <Cards key={e.id} info={e} />;
				})}
			</div>
		);
	}
}

export default Gameboard;
