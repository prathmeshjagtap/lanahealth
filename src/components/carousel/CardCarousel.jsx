import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import outcomesDatabase from "../../database/healthOutcomes.json";
import { OutcomesCard } from "../../screens/home/components";
import "./cardCarousel.css";

function CardCarousel() {
	function SampleNextArrow(props) {
		const { onClick } = props;
		return (
			<img
				className="left__arrow"
				onClick={onClick}
				src="/assets/right-arrow-swiper.png"
				alt="left-arrow-icon"
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { onClick } = props;
		return (
			<img
				className="right__arrow"
				onClick={onClick}
				src="/assets/left-arrow-swiper.png"
				alt="left-arrow-icon"
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="outcomes__container__mobile">
			<Slider {...settings}>
				{outcomesDatabase?.outcomesData?.map((item) => (
					<OutcomesCard key={item.id} cardInfo={item} />
				))}
			</Slider>
		</div>
	);
}

export { CardCarousel };
