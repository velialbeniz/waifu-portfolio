import { motion } from "framer-motion";

const items = ["Home", "Skills", "Portfolio", "Contact", "About"];

const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const NavList = () => {
	return (
		<motion.div
			className="navlinks"
			variants={variants}>
			{items.map((item, index) => (
				<motion.a
					href={`#${item}`}
					key={index}
					className="navlink"
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}>
					{item}
				</motion.a>
			))}
		</motion.div>
	);
};

export default NavList;
