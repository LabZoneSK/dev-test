import React from "react";
import { NAVBAR_TITLE } from "../../strings/strings";
import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<p className="navbar-title">{NAVBAR_TITLE}</p>
		</div>
	);
};

export default Navbar;
