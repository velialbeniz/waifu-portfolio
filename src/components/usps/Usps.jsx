import "./usps.scss";
import { motion } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Usps = () => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			whileInView="animate"
			className="usps">
			<motion.div
				variants={variants}
				className="wrapper">
				<motion.h1>Elevate Your Brand with Unmatched Visual Excellence</motion.h1>
				<motion.h3>Artistry Meets Innovation</motion.h3>
				<motion.p> I believe that design is more than just aesthetics—it's a powerful storytelling tool.</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default Usps;
