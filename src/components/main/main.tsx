import React, { useEffect, useState } from "react";
import { ICard } from "../../models/card";
import Card from "./card/card";
import "./main.scss";

const Main = () => {
	const [flickrData, setFlickrData] = useState<ICard[]>();
	const url = "/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

	const flickrFetch = async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				setFlickrData([]);
			}
			const data = await response.json();
			setFlickrData(data.items);
		} catch (error) {
			setFlickrData([]);
		}
	};

	useEffect(() => {
		flickrFetch();
	}, []);

	const flickrCards = flickrData?.map((item: ICard, index: number) => (
		<Card card={item} key={index} />
	));

	return <div className="main-container">{flickrCards}</div>;
};

export default Main;
