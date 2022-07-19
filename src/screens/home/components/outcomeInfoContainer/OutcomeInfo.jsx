import React from "react";
import { OutcomesCard } from "../outcomesCard/OutcomesCard";
import outcomesDatabase from "../../../../database/healthOutcomes.json";
import { CardCarousel } from "../../../../components";
import "./outcomeInfo.css";

function OutcomeInfo() {
	return (
		<div className="outcomesInfo__container">
			<h1 className="outcomesInfo__container__heading">
				Improving health outcomes
			</h1>
			<p className="outcomesInfo__container__subheading">
				We deliver better clinical outcomes and engage patients at every step of
				the care journey.
			</p>
			<CardCarousel />
			<div className="outcomes__container">
				{outcomesDatabase?.outcomesData?.map((item) => (
					<OutcomesCard key={item.id} cardInfo={item} />
				))}
			</div>
		</div>
	);
}

export { OutcomeInfo };
