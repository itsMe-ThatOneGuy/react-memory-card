//game would handel the game logic and pass state to scoreboard and gameboard
import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";

const Game = () => {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	const updateScore = () => {
		setScore((prevScore) => prevScore + 1);
	};

	const updateHighScore = () => {
		if (score > bestScore) {
			setBestScore(score);
		}
	};

	return (
		<div>
			<Scoreboard score={score} bestScore={bestScore} />
			<Gameboard />
		</div>
	);
};

export default Game;
