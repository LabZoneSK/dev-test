import React from "react";
import { ICard } from "../../../models/card";
import { EXPLORE } from "../../../strings/strings";
import "./card.scss";

type CardContent = {
	card: ICard;
};

const Card = ({ card }: CardContent) => {
	return (
		<div className="card-container">
			<img src={card.media.m} alt={card.title} className="image-card" />
			<div className="title-desc-button">
				<p className="title-card">{card.title}</p>
				<div
					className="description-card"
					dangerouslySetInnerHTML={{ __html: card.description }}
				/>
				<div className="button-card">{EXPLORE}</div>
			</div>
		</div>
	);
};

export default Card;
