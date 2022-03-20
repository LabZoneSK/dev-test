import React, { useEffect, useState } from "react";
import { FetchingState } from "../../enum/fetch-hook-enum";
import { ICard } from "../../models/card";
import Card from "./card/card";
import "./main.scss";

const Main = () => {
	const [flickrData, setFlickrData] = useState<ICard[]>();
	const [status, setStatus] = useState<FetchingState>(FetchingState.IDLE);
	const url = "/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

	const flickrFetch = async () => {
		setStatus(FetchingState.IS_FETCHING);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				setFlickrData([]);
			}
			const data = await response.json();
			setFlickrData(data.items);
			setStatus(FetchingState.IS_FETCHED);
		} catch (error) {
			setFlickrData([]);
			setStatus(FetchingState.IS_FETCHED);
		}
	};

	useEffect(() => {
		flickrFetch();
	}, []);

	const flickrCards = flickrData?.map((item: ICard, index: number) => (
		<Card card={item} key={index} />
	));

	const loadData =
		status === FetchingState.IS_FETCHING ? (
			<div className="loader"></div>
		) : (
			flickrCards
		);

	return <div className="main-container">{loadData}</div>;
};

export default Main;
