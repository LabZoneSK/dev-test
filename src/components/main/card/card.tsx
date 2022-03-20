import React from "react";
import "./card.scss";

const Card = () => {
	return (
		<div className="card-container">
			<img
				src="https://ychef.files.bbci.co.uk/976x549/p0blm65q.jpg"
				alt="night-sky"
				className="image-card"
			/>
			<div className="title-desc-button">
				<p className="title-card">Title</p>
				<p className="description-card">
					Look up at the night sky, and find yoursel immersed in the amazing
					mountain range of Alps.
				</p>
				<div className="button-card">Explore</div>
			</div>
		</div>
	);
};

export default Card;
