/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Oath.css";

const ShufflePics = () => {
	return (
		<section className="shuffle-hero-container">
			<div className="shuffle-hero-text">
				<span className="shuffle-hero-subtitle">
					A Place Where Learning Meets Excellence
				</span>
				<h3 className="shuffle-hero-title">
					Nurturing Young Minds for a Brighter Future
				</h3>
				<p className="shuffle-hero-description">
					At Sri Jnanavardhaka English School, we provide a nurturing
					environment where students thrive academically and personally. Our
					well-maintained classrooms are designed to create a comfortable and
					engaging learning experience.Join us in building a strong foundation
					for lifelong learning and success.
				</p>
				<button className="shuffle-hero-button">Book a seat</button>
			</div>
			<ShuffleGrid />
		</section>
	);
};

const shuffle = (array: (typeof squareData)[0][]) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

const squareData = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1663549662588-a3c62ff48a3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzcm9vbXN8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1601339434203-130259102db6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzcm9vbXN8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1601339434203-130259102db6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzcm9vbXN8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tc3xlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 5,
		src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 6,
		src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 7,
		src: "https://plus.unsplash.com/premium_photo-1682955296259-65540591f0c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 8,
		src: "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 9,
		src: "https://images.unsplash.com/photo-1612178574161-fd59b99b6894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxzY2hvb2x8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 10,
		src: "https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxzY2hvb2x8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 11,
		src: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxzY2hvb2x8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 12,
		src: "https://images.unsplash.com/photo-1569098272587-7af816a8293c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxzY2hvb2x8ZW58MHx8MHx8fDA%3D",
	},
];

const generateSquares = () => {
	return shuffle(squareData).map((sq) => (
		<motion.div
			key={sq.id}
			layout
			transition={{ duration: 1.5, type: "spring" }}
			className="shuffle-grid-item"
			style={{ backgroundImage: `url(${sq.src})` }}
		></motion.div>
	));
};

const ShuffleGrid = () => {
	const timeoutRef = useRef<any>(null);
	const [squares, setSquares] = useState(generateSquares());

	useEffect(() => {
		shuffleSquares();
		return () => clearTimeout(timeoutRef.current);
	}, []);

	const shuffleSquares = () => {
		setSquares(generateSquares());
		timeoutRef.current = setTimeout(shuffleSquares, 3000);
	};

	return <div className="shuffle-grid">{squares.map((sq) => sq)}</div>;
};

export default ShufflePics;
