import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";

const Game = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const updateScores = () => {
		const newScore = score + 1;
		setScore(() => newScore);
		if (newScore >= highScore) {
			setHighScore(() => newScore);
		}
	};

	const clearScore = () => {
		setScore(0);
	};

	return (
		<div>
			<Scoreboard score={score} highScore={highScore} />
			<Gameboard updateScores={updateScores} clearScore={clearScore} />
		</div>
	);
};

export default Game;
