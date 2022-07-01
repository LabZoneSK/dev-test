import React, {useEffect, useState} from "react";
import Card from "./Card";
import axios from "axios";
import {v4 as uuid} from "uuid";

export default function Cards() {
    const [fetchedPhotos, setFetchedPhotos] = useState(null);
    const tag = 'cats'
    useEffect(() => {
        const fetch = async () => {
            const API_KEY = '085a45cd75e3fbef22d99b3821dfd993'
            const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tag}&page=1&format=json&nojsoncallback=1`
            const res = await axios.get(url)
            const {photo: photos} = res.data.photos
            setFetchedPhotos(photos)
        }
        fetch()

    }, [])

    return (
        <div className={'container'}>
            <div className="flex flex-col md:flex-row md:flex-wrap my-[80px] gap-[50px]">
                {fetchedPhotos
                    ? fetchedPhotos.map(photo => (
                            <Card key={uuid()}
                                  id={photo.id} title={photo.title}
                                  serverId={photo.server} secret={photo.secret}
                            />
                    ))
                    : 'Loading'
                }
            </div>
        </div>
    )
}
