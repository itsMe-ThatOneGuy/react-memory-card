import React from "react";

class Scoreboard extends React.Component {
	constructor() {
		super();
		this.state = {
			score: 0,
			bestScore: 0,
		};
	}

	render() {
		return (
			<div className="scoreboard">
				<div className="score" id="current-score">
					<h3>{"Score: " + this.state.score}</h3>
				</div>
				<div className="score" id="best-score">
					<h3>{"Best Score: " + this.state.bestScore}</h3>
				</div>
			</div>
		);
	}
}

export default Scoreboard;
