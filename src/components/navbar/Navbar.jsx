import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<div className="navbar__container">
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
