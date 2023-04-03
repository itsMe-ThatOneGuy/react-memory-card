import React from "react";
import "./Scoreboard.css";

class Scoreboard extends React.Component {
	render() {
		return (
			<div className="scoreboard">
				<div className="score" id="current-score">
					<h3>{"Score: " + this.props.score}</h3>
				</div>
				<div className="score" id="best-score">
					<h3>{"High Score: " + this.props.highScore}</h3>
				</div>
			</div>
		);
	}
}

export default Scoreboard;
