import React, {useEffect, useState, useContext} from "react";
import Card from "./Card";
import axios from "axios";
import {v4 as uuid} from "uuid";
import {PhotosContext} from "../context/photos.context";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Cards() {
    const API_KEY = '809c7355b23df9c4b3b211d9463054ff'
    const [fetchedPhotos, setFetchedPhotos] = useState(null);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);
    const {tag} = useContext(PhotosContext)
    useEffect(() => {
        const fetch = async () => {
            setFetchedPhotos([])
            const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tag}&per_page=10&page=1&format=json&nojsoncallback=1`
            const res = await axios.get(url)
            const {photo: photos} = res.data.photos
            setFetchedPhotos(photos)
        }

        if (tag) fetch()
    }, [tag])

    const fetchPhotos = async () => {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tag}&per_page=10&page=${page}&format=json&nojsoncallback=1`
        const res = await axios.get(url)
        const {photo: photos} = res.data.photos
        return photos;
    }

    const fetchData = async () => {
        const photosData = await fetchPhotos();
        setFetchedPhotos([...fetchedPhotos, ...photosData])
        if (photosData.length === 0 || photosData.length < 10) {
            setHasMore(false)
        }
        setPage(page + 1)
    }

    return (
        <InfiniteScroll next={fetchData} hasMore={hasMore} loader={fetchedPhotos && <h4 className={'text-center'}>Loading...</h4>} dataLength={fetchedPhotos && fetchedPhotos.length}>
            <div className={`container ${!fetchedPhotos ? 'h-[calc(100vh-210px)]' : 'h-auto'}`}>
                <div className="flex flex-col md:flex-row md:flex-wrap my-[40px] md:my-[80px] gap-[35px] md:gap-[50px] w-full">
                    {fetchedPhotos
                        ? fetchedPhotos.map(photo => (
                            <Card key={uuid()}
                                  id={photo.id} title={photo.title}
                                  serverId={photo.server} secret={photo.secret}
                            />
                        ))
                        : <h1 className={'text-center self-center'}>Search something...</h1>
                    }
                </div>
            </div>
        </InfiniteScroll>

    )
}
