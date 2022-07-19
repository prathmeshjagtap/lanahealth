import React from "react";
import { Footer, Navbar } from "../../components";
import { InfoContainer, OutcomeInfo, VideoContainer } from "./components";

import "./home.css";

function Home() {
	return (
		<div>
			<Navbar />
			<div className="info__container">
				<h1 className="info__heading">
					Modernizing patient experiences, bedside and beyond.
				</h1>
				<p className="info__subHeading">
					Lana delivers exceptional healthcare experiences across the care
					continuum, helping patients stay on top of their health.
				</p>
				<button className="button">Schedule a Demo</button>
			</div>
			<VideoContainer />
			<InfoContainer />
			<div className="techInfo__container">
				<h1 className="techInfo__heading">
					Bringing patient-centered design and state-of-the-art technology to
					healthcare
				</h1>
				<img
					className="home__screen_tech"
					alt="play-icon"
					src="/assets/home-screen-tech-image.png"
				/>
				<img
					className="mobile__home__screen_tech"
					alt="play-icon"
					src="/assets/home-screen-tech-image-mobile.png"
				/>
				<button className="button">Learn More</button>
			</div>
			<OutcomeInfo />
			<div className="info__container3">
				<h1 className="info__heading3">
					Modernize patient experiences with Lana!
				</h1>
				<h4 className="info__subHeading3">
					Get in touch, and we'll get you started.
				</h4>
				<button className="button">Schedule a Demo</button>
			</div>
			<Footer />
		</div>
	);
}

export { Home };
