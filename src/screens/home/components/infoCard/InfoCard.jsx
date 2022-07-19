import React from "react";
import "./infoCard.css";

function InfoCard({ cardInfo }) {
	return (
		<div className="infoCard__container">
			<img
				src={cardInfo.image}
				alt={cardInfo?.heading}
				className="infoCard__image"
			/>
			<h1 className="infoCard__heading">{cardInfo?.heading}</h1>
			<p className="infoCard__subHeading">{cardInfo?.info}</p>
		</div>
	);
}

export { InfoCard };
