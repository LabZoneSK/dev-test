import React from "react";
import Footer from "../footer/footer";
import Main from "../main/main";
import Navbar from "../navbar/navbar";
import "./layout.scss";

const Layout = () => {
	return (
		<div className="container-layout">
			<div>
				<Navbar />
				<Main />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
