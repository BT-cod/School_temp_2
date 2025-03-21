import "./Nav.css";
import Logo from "../../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="nav-main-container">
			<div className="nav-logo-container">
				<img src={Logo} alt="Logo Image" />
				<p>
					Sri <br />
					Jnanavardhaka <br />
					School <br />
					<span>Bangalore</span>
				</p>
			</div>
			<div className="nav-items-container">
				<p className="nav-item">Home</p>
				<p className="nav-item">Our Legacy</p>
				<p className="nav-item">Academics</p>
				<p className="nav-item">Admissions</p>
				<p className="nav-item">Gallery</p>
				<p className="nav-item">Contact Us</p>
			</div>
			<div className="mobile-nav-container">
				<div className="mobile-menu-icon" onClick={toggleMenu}>
					<TiThMenu className="menu-icon" />
				</div>
				<div className={`mobile-nav-items-box ${isOpen ? "open" : "close"}`}>
					<FaWindowClose className="close-icon" onClick={toggleMenu} />
					<p className="mobile-nav-item">
						Home
						<CiLocationArrow1 />
					</p>
					<p className="mobile-nav-item">
						Our Legacy
						<CiLocationArrow1 />
					</p>
					<p className="mobile-nav-item">
						Academics
						<CiLocationArrow1 />
					</p>
					<p className="mobile-nav-item">
						Admissions
						<CiLocationArrow1 />
					</p>
					<p className="mobile-nav-item">
						Gallery
						<CiLocationArrow1 />
					</p>
					<p className="mobile-nav-item">
						Contact Us
						<CiLocationArrow1 />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Nav;
