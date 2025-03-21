import "./Mission.css";
import MVM_Img_1 from "../../assets/School_Motto_Img.png";
import MVM_Img_2 from "../../assets/School_Vision_Img.png";
import MVM_Img_3 from "../../assets/School_Mission_Img.png";

const Mission = () => {
	return (
		<div className="mvm-main-container">
			<div className="mvm-primary-container motto-container">
				<p className="mvm-primary-heading">MOTTO</p>
				<p className="mvm-secondary-text">Knowledge Illuminates Life</p>
				<p className="mvm-tertiary-text">
					At Sri Jnanavardhaka, we believe that every child’s journey is lit by
					the pursuit of knowledge and truth, inspiring them to shine brightly
					in all aspects of life.
				</p>
				<p className="mvm-view-more-link">View More</p>
				<div className="mvm-image-container">
					<img src={MVM_Img_1} alt="Motto_Image" />
				</div>
			</div>
			<div className="mvm-primary-container vision-container">
				<p className="mvm-primary-heading">Vision</p>
				<p className="mvm-secondary-text">Empowering Future Leaders</p>
				<p className="mvm-tertiary-text">
					Our vision is to create a dynamic, nurturing environment where
					students are equipped with critical thinking, creativity, and ethical
					values, preparing them to lead and make a positive impact on the
					world.
				</p>
				<p className="mvm-view-more-link">View More</p>
				<div className="mvm-image-container">
					<img src={MVM_Img_2} alt="Vision_Image" />
				</div>
			</div>
			<div className="mvm-primary-container mission-container">
				<p className="mvm-primary-heading">Mission</p>
				<p className="mvm-secondary-text">
					Inspiring Excellence, Cultivating Integrity
				</p>
				<p className="mvm-tertiary-text">
					We commit to providing a holistic, student-centered education that
					fosters academic excellence, encourages innovative learning, and
					instills strong moral values. Our mission is to empower each student
					to grow, achieve, and contribute meaningfully to society.
				</p>
				<p className="mvm-view-more-link">View More</p>
				<div className="mvm-image-container">
					<img src={MVM_Img_3} alt="Mission_Image" />
				</div>
			</div>
		</div>
	);
};

export default Mission;
