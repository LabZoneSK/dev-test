import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  width: 100%;
  max-width: 285px;
  height: min-content;
  background-color: white;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`

export default function Card({id, title, serverId, secret}) {
    const [description, setDescription] = useState('');
    const [userId, setUserId] = useState('');
    useEffect(() => {
        const fetch = async () => {
            const API_KEY = '085a45cd75e3fbef22d99b3821dfd993'
            const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`
            const res = await axios.get(url);
            setDescription(res.data.photo.description._content)
            setUserId(res.data.photo.owner.nsid)
        }
        fetch()
    }, [])
    return (
        <CardContainer>
            <img src={`https://live.staticflickr.com/${serverId}/${id}_${secret}_z.jpg object-cover`} alt=""
                 className={'w-full h-[155px]'}/>
            <div className={'p-[25px]'}>
                <h3 className={'text-[28px] leading-[34px]'}>{title.replace(/[0-9]/g, "") || 'Untitled'}</h3>
                <p className={'my-[20px] text-[16px] leading-[20px] max-w-[200px]'}>
                    {description || "Doesn't have a description"}
                </p>
                <a
                    href={`https://www.flickr.com/photos/${userId}/${id}`}
                    className={'transition-default flex items-center justify-center w-full rounded-[3px] bg-[#F5F5F5] h-[45px] text-primary hover:border hover:border-primary text-[16px] leading-[19px]'}>Explore
                </a>
            </div>
        </CardContainer>
    )
}
