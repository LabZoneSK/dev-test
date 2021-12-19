import React, {useEffect} from 'react';

import {ImageCard} from "../index";
import * as S from './styled';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getCards} from "../../store/card-list/actions";

const CardList = () => {
    const dispatch = useDispatch()
    const {cards} = useSelector((state: RootState) => state.cards)

    console.log(cards)

    useEffect(() => {
        dispatch(getCards())
    }, [])

    return (
        <S.CardContainer>
            {
                cards?.map(
                    ({link, title, description, media}, idx) => (
                        <ImageCard
                            key={idx}
                            image={media.m}
                            title={title}
                            description={description}
                            link={link}
                        />
                    )
                )
            }
        </S.CardContainer>
    )
}

export default CardList;
