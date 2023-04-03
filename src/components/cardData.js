import donpatch0 from "../img/donpatch0.jpg";
import donpatch1 from "../img/donpatch1.png";
import donpatch2 from "../img/donpatch2.jpg";
import donpatch3 from "../img/donpatch3.jpg";
import donpatch4 from "../img/donpatch4.jpg";
import donpatch5 from "../img/donpatch5.png";
import donpatch6 from "../img/donpatch6.jpg";
import donpatch7 from "../img/donpatch7.jpg";
import donpatch8 from "../img/donpatch8.jpg";
import donpatch9 from "../img/donpatch9.jpeg";
import donpatch10 from "../img/donpatch10.jpeg";
import donpatch11 from "../img/donpatch11.jpeg";

const images = [
	donpatch0,
	donpatch1,
	donpatch2,
	donpatch3,
	donpatch4,
	donpatch5,
	donpatch6,
	donpatch7,
	donpatch8,
	donpatch9,
	donpatch10,
	donpatch11,
];
const cards = images.map((img, i) => {
	return {
		id: i,
		img: img,
		clicked: false,
	};
});

export default cards;
