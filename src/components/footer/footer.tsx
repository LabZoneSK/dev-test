import React from "react";
import { FOOTER_TITLE } from "../../strings/strings";
import "./footer.scss";

const Footer = () => {
	return (
		<div className="footer-container">
			<p className="footer-title">{FOOTER_TITLE}</p>
		</div>
	);
};

export default Footer;
