import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";

const Game = () => {
	const getScoreLocal = () => {
		const localScore = JSON.parse(window.localStorage.getItem("highScore"));
		if (localScore !== null) {
			return localScore;
		} else {
			return 0;
		}
	};

	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(getScoreLocal());

	const setScoreLocal = (score) => {
		window.localStorage.setItem("highScore", JSON.stringify(score));
	};

	const updateScores = () => {
		const newScore = score + 1;
		setScore(newScore);
		if (newScore >= highScore) {
			setHighScore(newScore);
			setScoreLocal(newScore);
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
