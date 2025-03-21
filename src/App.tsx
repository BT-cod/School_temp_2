import "./App.css";
import About from "./Components/About/About";
import Admission from "./Components/AdmissionFooter/Admission";
import Home from "./Components/Home/Home";
import Leadership from "./Components/Leadership/Leadership";
import Mission from "./Components/Mission/Mission";
import Nav from "./Components/Navbar/Nav";
import ShufflePics from "./Components/Oath/Oath";
import School_Image_Carousel from "./Components/School-Images/School_Images";
import StatsSection from "./Components/StatSection/Stats";

const App = () => {
	return (
		<div className="app-main-container">
			<div className="nav-container">
				<Nav />
			</div>
			<div className="home-container">
				<Home />
			</div>
			<div className="stat-container">
				<StatsSection />
			</div>
			<div className="about-section">
				<About />
			</div>
			<div className="school-image-carousel-section">
				<School_Image_Carousel />
			</div>
			<div className="mvm-container">
				<Mission />
			</div>
			<div className="oath-container">
				<ShufflePics />
			</div>
			<div className="leadership-container">
				<Leadership />
			</div>
			<div className="admission-footer-container">
				<Admission />
			</div>
		</div>
	);
};

export default App;
