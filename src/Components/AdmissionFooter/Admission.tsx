import "./Admission.css";
import Admission_img from "../../assets/School_footer_img.png";

const Admission = () => {
	return (
		<>
			<div className="admission-footer-main-container">
				<div className="admission-text-container">
					<p>Admissions open</p>
					<span>2025-26</span>
					<div className="enquire-now-btn">
						<p>Enquire Now</p>
					</div>
				</div>
				<div className="admission-image-container">
					<img src={Admission_img} alt="Admission Image" />
				</div>
			</div>
			<p className="footer-text">©2025. DWS Bangalore. All Rights Reserved</p>
		</>
	);
};

export default Admission;
