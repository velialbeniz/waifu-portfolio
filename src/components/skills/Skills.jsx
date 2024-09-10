import "./skills.scss";

import { motion } from "framer-motion";

const Skills = () => {
	return (
		<motion.div className="skills">
			<motion.div className="text-container">
				<motion.p>
					Lorem ipsum dolor sit. <br /> Inventore, necessitatibus!
				</motion.p>
				<hr />
			</motion.div>
			<motion.div className="title-container">
				<div className="title">
					<img
						src="/people.webp"
						alt="skills"
					/>
					<h1>
						<b>Unique</b> Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<b>For Your</b> Business.
					</h1>
					<motion.button whileHover={{ x: "40px"}}>What I Do?</motion.button>
				</div>
			</motion.div>
			<motion.div className="list-container">
				<motion.div
					className="box"
					whileHover={{ y:"20px", background: "lightgray", color: "black" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis nam debitis pariatur, unde alias quam accusamus corporis doloribus repellat!</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ y:"20px", background: "lightgray", color: "black" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis nam debitis pariatur, unde alias quam accusamus corporis doloribus repellat!</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ y:"20px", background: "lightgray", color: "black" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis nam debitis pariatur, unde alias quam accusamus corporis doloribus repellat!</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ y:"20px", background: "lightgray", color: "black" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facilis nam debitis pariatur, unde alias quam accusamus corporis doloribus repellat!</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Skills;
