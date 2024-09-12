import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./App.scss";
import { Loader } from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Usps from "./components/usps/Usps";

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
				<section>
					<Skills />
				</section>
				<section id="Portfolio">
					<Parallax type="portfolio" />
				</section>
				<div style={{ height: "100vh", background: "black", overflow: "hidden", position: "relative", zIndex: 10 }}>
					<Usps />
				</div>
				<div>
					<Portfolio />
				</div>
				<section>{/* portfolio */}</section>
				<section>Portfolio2</section>
				<section>Portfolio3</section>
				<section id="Contact">Contact</section>
			</ReactLenis>
		</div>
	);
};

export default App;
