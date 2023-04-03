import React from "react";
import "./Gameboard.css";
import Card from "./Card";
import cards from "./cardData";

class Gameboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardList: cards,
		};

		this.shuffleCards = this.shuffleCards.bind(this);
		this.gameLoop = this.gameLoop.bind(this);
	}

	getSelectedCardIndex(e) {
		const selectCard = e.target.id;
		const cardIndex = this.state.cardList.findIndex(
			(card) => selectCard === `Image${card.id}`
		);
		return cardIndex;
	}

	updateCardClick(card) {
		const newList = [...this.state.cardList];
		newList[card].clicked = true;
		this.setState({
			cardList: newList,
		});
	}

	shuffleCards() {
		const shuffled = [...this.state.cardList].sort(() => Math.random() - 0.5);
		this.setState({
			cardList: shuffled,
		});
	}

	resetCards() {
		let allCards = [...this.state.cardList];
		for (let index = 0; index < allCards.length; index++) {
			const element = allCards[index];
			element.clicked = false;
		}
		this.setState({
			cardList: allCards,
		});
	}

	gameLoop(e) {
		const currentCardList = this.state.cardList;
		const selectedCard = this.getSelectedCardIndex(e);
		console.log(currentCardList[selectedCard].clicked);
		if (currentCardList[selectedCard].clicked === false) {
			this.updateCardClick(selectedCard);
			this.props.updateScores();
			this.shuffleCards();
		} else {
			this.resetCards();
			this.props.clearScore();
			this.shuffleCards();
		}
	}

	componentDidMount() {
		this.shuffleCards();
	}

	render() {
		return (
			<div className="gameboard">
				{this.state.cardList.map((e) => {
					return <Card key={e.id} info={e} selectCard={this.gameLoop} />;
				})}
			</div>
		);
	}

	componentDidUpdate() {}
}

export default Gameboard;
