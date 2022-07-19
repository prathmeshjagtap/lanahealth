import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
	const [mobileToggle, setMobileToggle] = useState(false);

	const closeToggle = () => {
		setMobileToggle(false);
	};
	return (
		<div className="navbar__container">
			<div className="mobile__toggle__container">
				<img
					src="/assets/nav-mobile-toggle.png"
					alt="mobile__toggle"
					onClick={() => setMobileToggle((mobileToggle) => !mobileToggle)}
					className="mobile__toggle__icon"
				/>
				{mobileToggle ? (
					<div className="mobiel__toggle__list">
						<li onClick={closeToggle}>Home</li>
						<li onClick={closeToggle}>Product</li>
						<li onClick={closeToggle}>About</li>
						<li onClick={closeToggle}>Blog</li>
						<li onClick={closeToggle}>Contact Us</li>
					</div>
				) : null}
			</div>
			<div className="navbar__logo">
				<img
					className="logo-text"
					src="/assets/logo-text.svg"
					alt="logo-text"
				/>
			</div>
			<ul className="navbar__list">
				<li>Product</li>
				<li>About</li>
				<li>Blog</li>
				<li>Contact Us</li>
			</ul>
		</div>
	);
}

export { Navbar };
