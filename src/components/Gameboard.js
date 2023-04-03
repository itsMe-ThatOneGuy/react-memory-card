import React from "react";
import "./Gameboard.css";
import Card from "./Card";
import cardList from "./cardData";

class Gameboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardList: cardList,
			shouldShuffle: true,
		};

		this.shuffleCards = this.shuffleCards.bind(this);
		this.selectCard = this.selectCard.bind(this);
		this.test = this.test.bind(this);
	}

	createCardList() {
		const newList = [...this.state.cardList];
	}

	getSelectedCard(e) {
		const selectCard = e.target.id;
		const cardIndex = this.state.cardList.findIndex(
			(card) => selectCard === `Image${card.id}`
		);
		return cardIndex;
	}

	selectCard(e) {
		const newList = [...this.state.cardList];
		newList[this.getSelectedCard(e)].cliked = true;
		this.setState({
			cardList: newList,
			shouldShuffle: true,
		});
	}

	shuffleCards() {
		const shuffled = [...this.state.cardList].sort(() => Math.random() - 0.5);
		this.setState({
			cardList: shuffled,
			shouldShuffle: false,
		});
		console.log(shuffled);
	}

	test() {
		this.shuffleCards();
	}

	componentDidMount() {
		this.shuffleCards();
	}

	render() {
		return (
			<div className="gameboard">
				<button onClick={this.test}>Test</button>
				{this.state.cardList.map((e) => {
					return <Card key={e.id} info={e} selectCard={this.selectCard} />;
				})}
			</div>
		);
	}

	componentDidUpdate() {}
}

export default Gameboard;
