import { useEffect, useState } from "react";
import "./Admission.css";
import Admission_img from "../../assets/School_footer_img.png";

const Admission = () => {
	const [offsetX, setOffsetX] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const movement = Math.sin(window.scrollY * 0.01) * 5;
			setOffsetX(movement);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
				<div
					className="admission-image-container"
					style={{
						transform: `translateX(${offsetX}px)`,
						transition: "transform 0.1s linear",
					}}
				>
					<img src={Admission_img} alt="Admission Image" />
				</div>
			</div>
			<p className="footer-text">©2025. DWS Bangalore. All Rights Reserved</p>
		</>
	);
};

export default Admission;
