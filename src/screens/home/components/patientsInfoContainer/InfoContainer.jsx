import React, { useState, useEffect, useRef } from "react";
import outcomesDatabase from "../../../../database/healthOutcomes.json";
import { InfoCard } from "../infoCard/InfoCard";
import "./infoContainer.css";

function InfoContainer() {
	const [scrollTop, setScrollTop] = useState(0);
	const scrollRef = useRef(null);
	const beforeScroll = useRef(null);

	const onScroll = () => {
		const winSroll =
			document.documentElement.scrollTop -
			beforeScroll.current.clientHeight -
			200;
		const height = scrollRef.current.clientHeight;

		const scrolled = (winSroll / height) * 100;

		setScrollTop(scrolled);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="info__container2">
			<div className="info__container2__heading" ref={beforeScroll}>
				<h1>We're engaging patients at every step of their care journey</h1>
				<p>
					Lana is a constant companion for patients across their care journey,
					right from the hospital bedside, to their recovery post-discharge.
				</p>
			</div>
			<div className="progress__Wrapper">
				<div
					className="progress__style"
					style={{ height: `${scrollTop}%` }}
				></div>
			</div>
			<div className="patientsInfo__conaiter" ref={scrollRef}>
				{outcomesDatabase?.patientBenifitsInfo?.map((item) => (
					<InfoCard key={item.id} cardInfo={item} />
				))}
			</div>
			<div className="mobile__patientsInfo__conaiter">
				{outcomesDatabase?.patientBenifitsInfo?.map((item) => (
					<InfoCard key={item.id} cardInfo={item} />
				))}
			</div>
		</div>
	);
}

export { InfoContainer };
