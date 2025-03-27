import { useEffect, useState } from "react";
import "./loader.css";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setTimeout(onFinish, 500); // Delay before hiding loader
					return 100;
				}
				return prev + 2;
			});
		}, 30);

		return () => clearInterval(interval);
	}, [onFinish]);

	return (
		<div className={`loader-container ${progress === 100 ? "fade-out" : ""}`}>
			<h1 className="logo">SJES</h1>
			<div className="progress-bar">
				<div className="progress" style={{ width: `${progress}%` }}></div>
			</div>
		</div>
	);
};

export default Loader;
