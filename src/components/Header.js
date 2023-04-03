import React from "react";
import "./Header.css";
import bobobo from "../img/BoBoBo-Bo_Bo-BoBo_logo.webp";

const Header = () => {
	return (
		<header className="header">
			<img src={bobobo} alt="BoBoBo logo" />
			<h2>The Many Faces of Don Patch Memory Card Game</h2>
			<p>
				Score points by clicking an image. Try to only click each image once!
			</p>
		</header>
	);
};

export default Header;
