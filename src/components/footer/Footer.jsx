import React from "react";
import "./footer.css";

function Footer() {
	return (
		<>
			<div className="footer">
				<div className="footer__container">
					<div className="social__coontainer">
						<img
							className="logo__text_footer"
							src="/assets/logo-text.svg"
							alt="logo-text"
						/>
						<div className="social__icons">
							<img src="/assets/twitter-unselected.png" alt="twitter-logo" />
							<img src="/assets/linkedin-unselected.png" alt="linkedin-logo" />
							<img src="/assets/mail-unselected.png" alt="mail-logo" />
						</div>
						<p className="copyright">© 2021 Lana Health</p>
					</div>
					<div className="links__container">
						<div className="website__links">
							<h2 className="links__heading">Resources</h2>
							<li>Product</li>
							<li>About</li>
							<li>Blog</li>
							<li>Contact Us</li>
						</div>
						<div className="website__links">
							<h2 className="links__heading">Policies</h2>
							<li>Privacy Policy</li>
							<li>Terms of Use</li>
						</div>
					</div>
				</div>
			</div>
			<div className="mobile__copyright">© 2021 Lana Health</div>
		</>
	);
}

export { Footer };
