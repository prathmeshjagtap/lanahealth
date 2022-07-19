import React from "react";
import "./outcomesCard.css";
function OutcomesCard({ cardInfo }) {
	return (
		<div className="OutcomesCard__container">
			<img
				className="cardInfo__image"
				src={cardInfo.imgage}
				alt={cardInfo.name}
			/>
			<h1 className="cardInfo__heading">{cardInfo.heading}</h1>
			<p className="cardInfo__subheading">{cardInfo.info}</p>
		</div>
	);
}

export { OutcomesCard };
