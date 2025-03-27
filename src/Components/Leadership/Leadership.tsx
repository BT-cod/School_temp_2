import "./Leadership.css";
import PrincipalImg from "../../assets/Principal_Img.webp";
import HOD_Image from "../../assets/HOD_Img.webp";
import Management_Image from "../../assets/Management_Img.webp";
import VP_image from "../../assets/VP_img.webp";

const Leadership = () => {
	return (
		<div className="leadership-main-container">
			<div className="leadership-primary-heading">
				<p>Leadership</p>
			</div>
			<div className="leadership-primary-container">
				<div className="principal-words-container">
					<span>S.J.E.S</span>
					<p>
						"At Sri Jnanavardhaka English School, we believe that education is
						not just about academic excellence but also about character building
						and personal growth. Our mission is to create a nurturing
						environment where every student feels valued, inspired, and
						empowered to reach their full potential. With a team of dedicated
						educators, well-equipped classrooms, and a holistic approach to
						learning, we strive to shape responsible and compassionate
						individuals. We encourage students to be curious, innovative, and
						confident in facing the challenges of the future. Together, let’s
						build a community where learning knows no bounds!"
					</p>
				</div>
				<div className="principal-image-container">
					<img src={PrincipalImg} alt="Principal Image" />
				</div>
			</div>
			<div className="leadership-secondary-container">
				<div className="leaders-container">
					<img src={Management_Image} alt="Leaders" />
					<p>Mr. Management Head</p>
					<span>Management, SJES</span>
				</div>
				<div className="leaders-container">
					<img src={HOD_Image} alt="Leaders" />
					<p>Mr. Head Of Department</p>
					<span>Management, SJES</span>
				</div>
				<div className="leaders-container">
					<img src={VP_image} alt="Leaders" />
					<p>Mr. Vice Principal Trustee</p>
					<span>Management, SJES</span>
				</div>
				<div className="leaders-container">
					<img src={Management_Image} alt="Leaders" />
					<p>Mr. Management Head</p>
					<span>Management, SJES</span>
				</div>
				<div className="leaders-container">
					<img src={HOD_Image} alt="Leaders" />
					<p>Mr. Head Of Department</p>
					<span>Management, SJES</span>
				</div>
				<div className="leaders-container">
					<img src={VP_image} alt="Leaders" />
					<p>Mr. Vice Principal Trustee</p>
					<span>Management, SJES</span>
				</div>
			</div>
		</div>
	);
};

export default Leadership;
