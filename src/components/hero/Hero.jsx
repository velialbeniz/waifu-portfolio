import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};
const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			duration: 30,
			repeatType: "mirror",
			repeat: Infinity,
		},
	},
};
const imageVariants = {
	initial: {
		x: -500,
		scale: 0,
		opacity: 0,
	},
	animate: {
		x: 0,
		scale: 1,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="text-container"
					variants={textVariants}
					initial="initial"
					animate="animate">
					<motion.h2 variants={textVariants}>Yasemin Albeniz</motion.h2>
					<motion.h1 variants={textVariants}>Graphic Designer</motion.h1>
					<motion.div
						variants={textVariants}
						className="buttons">
						<button>Latest Works</button>
						<button>Contact Me</button>
					</motion.div>
					<motion.img
						variants={textVariants}
						animate="scrollButton"
						src="/scroll.png"
						alt="scroll"
					/>
				</motion.div>
				<div className="image-container">
					<motion.img
						variants={imageVariants}
						initial="initial"
						animate="animate"
						src="/coffeetime.svg"
						alt="yasemin"
					/>
				</div>
			</div>
			<motion.div
				variants={sliderVariants}
				initial="initial"
				animate="animate"
				className="sliding-text">
				Graphic & UI - UX Designer
			</motion.div>
		</div>
	);
};

export default Hero;
