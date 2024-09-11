import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
		layoutEffect: false,
	});

	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
	const planetBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

	// const planetBg = useTransform(scrollXProgress, [0, 1], ["0%", "200%"])

	return (
		<div
			style={{
				background: type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)",
			}}
			className="parallax">
			<motion.h1 style={{ y: yBg }}>{type === "skills" ? "What I Do?" : "What I Did?"}</motion.h1>
			<motion.div className="mountains"></motion.div>
			<motion.div
				style={{ y: planetBg, backgroundImage: `url(${type === "skills" ? "/planets.png" : "/sun.png"})` }}
				className="planets"></motion.div>

			<motion.div
				style={{ x: planetBg }}
				className="stars"></motion.div>
		</div>
	);
};

export default Parallax;
