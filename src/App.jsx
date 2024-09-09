import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./App.scss";
import { Loader } from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

const App = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	if (loading) {
		return (
			<section>
				<Loader />
			</section>
		);
	}

	return (
		<div>
			<ReactLenis root>
				<section id="Home">
					<Navbar />
					<Hero />
				</section>
				<section id="Skills">
					<Parallax type="skills" />
				</section>
				<section>Services</section>
				<section id="Portfolio">
					<Parallax type="portfolio" />
				</section>
				<section>Portfolio1</section>
				<section>Portfolio2</section>
				<section>Portfolio3</section>
				<section id="Contact">Contact</section>
			</ReactLenis>
		</div>
	);
};

export default App;
