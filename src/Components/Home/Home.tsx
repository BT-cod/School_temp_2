import Carousel from "./Components/Carousal";
import "./Home.css";

const Home = () => {
	return (
		<div className="home-main-container">
			<div className="home-carousal-container">
				<Carousel />
			</div>
		</div>
	);
};

export default Home;
