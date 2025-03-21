import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./Stats.css";

const stats = [
	{ value: 35000, suffix: "+", label: "STUDENTS" },
	{ value: 2500, suffix: "+", label: "TEACHERS" },
	{ value: 10000, suffix: "+", label: "ALUMNI" },
	{ value: 100, suffix: "+", label: "AWARDS" },
];

const StatsSection: React.FC = () => {
	const [startCount, setStartCount] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setStartCount(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div className="stats-container" ref={ref}>
			{stats.map((stat, index) => (
				<div key={index} className="stat-item">
					<h2>
						{startCount ? (
							<CountUp start={0} end={stat.value} duration={2} />
						) : (
							0
						)}
						{stat.suffix}
					</h2>
					<p>{stat.label}</p>
				</div>
			))}
		</div>
	);
};

export default StatsSection;
