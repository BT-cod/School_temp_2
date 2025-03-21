import "./About.css";

const About = () => {
	return (
		<div className="about-main-container">
			<div className="about-primary-heading">
				<p>
					About <br />
					Sri Jnanavardhaka School <span>Bangalore</span>{" "}
				</p>
			</div>
			<div className="about-secondary-text-container">
				<p>
					Sri Jnanavardhaka Primary and High School in Bangalore is recognized
					for its student-centered approach and emphasis on holistic
					development. The school focuses on academic excellence, moral values,
					and extracurricular engagement, ensuring that learners receive a
					well-rounded education. By combining innovative teaching methods with
					a supportive environment, Sri Jnanavardhaka nurtures confident and
					responsible individuals prepared to excel in higher education and
					beyond.
				</p>
				<a href="/" className="view_more_btn">
					View More
				</a>
			</div>
		</div>
	);
};

export default About;
