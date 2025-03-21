/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Carousal.css";
import CarouselImg1 from "../../../assets/School_Caro_1.jpg";
import CarouselImg2 from "../../../assets/School_Caro_2.jpg";
import CarouselImg3 from "../../../assets/School_Caro_3.jpg";
import CarouselImg4 from "../../../assets/School_Caro_4.jpg";

const Carousel: React.FC = () => {
	const progressBarRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const splide = document.querySelector(".splide") as any;
		if (!splide) return;

		splide.addEventListener("mounted", updateProgress);
		splide.addEventListener("move", updateProgress);

		function updateProgress() {
			if (progressBarRef.current) {
				const end = splide.splide.Components.Controller.getEnd() + 1;
				const rate = Math.min((splide.splide.index + 1) / end, 1);
				progressBarRef.current.style.width = `${100 * rate}%`;
			}
		}

		return () => {
			splide.removeEventListener("mounted", updateProgress);
			splide.removeEventListener("move", updateProgress);
		};
	}, []);

	return (
		<div className="splide">
			<Splide
				options={{
					type: "loop",
					perPage: 1,
					autoplay: true,
					interval: 3000,
				}}
			>
				<SplideSlide>
					<div className="home-page-carousel">
						<img src={CarouselImg1} alt="Carousel Image" />
						<p>Here Comes Text For This Slide</p>
					</div>
				</SplideSlide>
				<SplideSlide>
					<div className="home-page-carousel">
						<img src={CarouselImg2} alt="Carousel Image" />
						<p>Here Comes Text For This Slide</p>
					</div>
				</SplideSlide>
				<SplideSlide>
					<div className="home-page-carousel">
						<img src={CarouselImg3} alt="Carousel Image" />
						<p>Here Comes Text For This Slide</p>
					</div>
				</SplideSlide>
				<SplideSlide>
					<div className="home-page-carousel">
						<img src={CarouselImg4} alt="Carousel Image" />
						<p>Here Comes Text For This Slide</p>
					</div>
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Carousel;
