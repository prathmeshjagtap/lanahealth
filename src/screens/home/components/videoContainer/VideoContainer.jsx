import React, { useState } from "react";
import { Modal } from "../../../../components";
import "./videoContainer.css";

function VideoContainer() {
	const [modal, setModal] = useState(false);

	const close = () => {
		setModal(false);
	};

	return (
		<>
			<div className="video__container">
				<img
					className="home__page__illustration"
					alt="home-page-illustration"
					src="/assets/home-page-illustration.svg"
				/>
				<img
					className="play_icon"
					alt="play-icon"
					src="/assets/play-video.svg"
					onClick={() => setModal(true)}
				/>
			</div>
			<Modal close={close} open={modal} />
		</>
	);
}

export { VideoContainer };
