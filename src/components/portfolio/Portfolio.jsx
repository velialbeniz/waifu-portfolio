import { randomSlider1, randomSlider2, works } from "../../constants/works";
import "./portfolio.scss";

const Portfolio = () => {
	return (
		<div className="portfolio">
			<div className="slider-container">
				<div className="slider-top">
					<div className="item">
						<img
							src={works[0].image}
							alt={works[0].name}
						/>
					</div>
					<div className="item">
						<img
							src={works[1].image}
							alt={works[1].name}
						/>
					</div>
					<div className="item">
						<img
							src={works[2].image}
							alt={works[2].name}
						/>
					</div>
				</div>
			</div>

			<div className="small-slider-container">
				<SmallSliderCarousel slider={randomSlider1} />
				<div className="bottom-slider">
					<SmallSliderCarousel slider={randomSlider2} />
				</div>
				<div style={{ height: "100vh" }}></div>
			</div>
		</div>
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
