import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Nav";
import StatsSection from "./Components/StatSection/Stats";
import Admission from "./Components/AdmissionFooter/Admission";
import Leadership from "./Components/Leadership/Leadership";
import Mission from "./Components/Mission/Mission";
import ShufflePics from "./Components/Oath/Oath";
import School_Image_Carousel from "./Components/School-Images/School_Images";

const App = () => {
	const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.2 }
		);

		sectionsRef.current.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => {
			sectionsRef.current.forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	// Fix: Use function callback to store refs
	const setSectionRef = (el: HTMLDivElement | null, index: number) => {
		if (el) {
			sectionsRef.current[index] = el;
		}
	};

	// Show scroll-to-top button when scrolling down
	useEffect(() => {
		const handleScroll = () => {
			setShowScrollToTop(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="app-main-container">
			<div className="nav-container">
				<Nav />
			</div>
			<div
				ref={(el) => setSectionRef(el, 0)}
				className="home-container section"
			>
				<Home />
			</div>
			<div
				ref={(el) => setSectionRef(el, 1)}
				className="stat-container section"
			>
				<StatsSection />
			</div>
			<div ref={(el) => setSectionRef(el, 2)} className="about-section section">
				<About />
			</div>
			<div
				ref={(el) => setSectionRef(el, 3)}
				className="school-image-carousel-section section"
			>
				<School_Image_Carousel />
			</div>
			<div ref={(el) => setSectionRef(el, 4)} className="mvm-container section">
				<Mission />
			</div>
			<div
				ref={(el) => setSectionRef(el, 5)}
				className="oath-container section"
			>
				<ShufflePics />
			</div>
			<div
				ref={(el) => setSectionRef(el, 6)}
				className="leadership-container section"
			>
				<Leadership />
			</div>
			<div
				ref={(el) => setSectionRef(el, 7)}
				className="admission-footer-container section"
			>
				<Admission />
			</div>

			{/* Scroll to Top Button */}
			{showScrollToTop && (
				<button className="scroll-to-top" onClick={scrollToTop}>
					↑
				</button>
			)}
		</div>
	);
};

export default App;
