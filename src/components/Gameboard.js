import React from "react";
import "./Gameboard.css";
import Cards from "./Card";
import cardList from "./cardData";

class Gameboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cardList: cardList,
			shouldShuffle: false,
		};

		this.shuffleCards = this.shuffleCards.bind(this);
	}

	shuffleCards() {
		const shuffled = this.state.cardList
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		this.setState({
			cardList: shuffled,
		});
	}

	componentDidMount() {
		this.shuffleCards();
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
