import React from "react";
import "./modal.css";
import { createPortal } from "react-dom";

function Modal({ open, close }) {
	if (!open) return null;
	return createPortal(
		<div className="modal">
			<iframe
				id="intro-video-iframe"
				src="https://player.vimeo.com/video/540108698"
				width="80%"
				height="60%"
				frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen=""
				title="video"
			></iframe>
			<div className="close" onClick={close}>
				<img
					className="close__button"
					src="/assets/close.png"
					alt="close-icon"
				/>
			</div>
		</div>,
		document.getElementById("modal-root")
	);
}

export { Modal };
