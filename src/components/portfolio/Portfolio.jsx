import { useScroll, useTransform, motion, useMotionValueEvent, progress } from "framer-motion";
import { randomSlider1, randomSlider2, works } from "../../constants/works";
import "./portfolio.scss";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";

const Portfolio = () => {
	// Top Slider Animations
	const { width, height } = useWindowSize();

	const carouseWrapperRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: carouseWrapperRef,
		offset: ["start start", "end start"],
	});

	const maxScale = useMemo(() => {
		const windowYRatio = height / width;
		const xScale = 1.6667;
		const yScale = xScale * (16 / 9) * windowYRatio;
		return Math.max(xScale, yScale);
	}, [width, height]);

	const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [maxScale * 1.1, maxScale, 1]);

	const worksOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
	const worksTranslateXLeft = useTransform(scrollYProgress, [0.65, 0.8], [-30, 0]);
	const worksTranslateXRight = useTransform(scrollYProgress, [0.65, 0.8], [30, 0]);

	// Small Slider Animations
	const [carouselVariant, setCarouselVariant] = useState("inactive");
	useMotionValueEvent(scrollYProgress, "change", (progress) => {
		if (progress >= 0.67) {
			setCarouselVariant("active");
		} else {
			setCarouselVariant("inactive");
		}
	});

	return (
		<motion.div
			animate={carouselVariant}
			className="portfolio">
			<div
				ref={carouseWrapperRef}
				className="slider-container">
				<div className="sticky-container">
					<div className="slider-top">
						<motion.div
							style={{ opacity: worksOpacity, x: worksTranslateXLeft }}
							className="item">
							<img
								src={works[0].image}
								alt={works[0].name}
							/>
							<motion.div
								variants={{
									active: { opacity: 1 },
									inactive: { opacity: 0 },
								}}
								className="item-text">
								<p>Best Work</p>
								<button>Visit</button>
							</motion.div>
						</motion.div>
						<motion.div
							style={{ scale }}
							className="item">
							<img
								src={works[1].image}
								alt={works[1].name}
							/>
							<motion.div
								variants={{
									active: { opacity: 1 },
									inactive: { opacity: 0 },
								}}
								className="item-text">
								<p>Best Work</p>
								<button>Visit</button>
							</motion.div>
						</motion.div>
						<motion.div
							style={{ opacity: worksOpacity, x: worksTranslateXRight }}
							className="item">
							<img
								src={works[2].image}
								alt={works[2].name}
							/>
						</motion.div>
					</div>
				</div>
			</div>

			<motion.div
				variants={{ active: { opacity: 1, y: 0 }, inactive: { opacity: 0 }, y: 20 }}
				className="small-slider-container">
				<SmallSliderCarousel slider={randomSlider1} />
				<div className="bottom-slider">
					<SmallSliderCarousel slider={randomSlider2} />
				</div>
			</motion.div>
		</motion.div>
	);
};

const SmallSliderCarousel = ({ slider }) => {
	return (
		<div className="small-slider">
			{slider.map((item, index) => (
				<div
					className="item"
					key={`${item.name} - ${index}`}>
					<img
						src={item.image}
						alt={item.name}
					/>
				</div>
			))}
		</div>
	);
};

export default Portfolio;
