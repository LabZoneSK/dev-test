import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/reducers"
import { getCards } from "../store/action-creators";
import Card from 'react-bootstrap/Card'
import { Container, Col, Row } from 'react-bootstrap'
import Loader from './Loader'
import {CardListProps, Photo} from "../types"

const CardList = ({columnsPerRow}: CardListProps) => {

    const dispatch = useDispatch()
    const { cardList, loading } = useSelector((state: RootState) => state.cardList)

    useEffect(() =>{
        dispatch(getCards())
    }, [])

    return (
        <>
        {
            !loading ?  
            <Container className="mt-5">
                <Row xs={1} md={columnsPerRow} className="justify-content-center">
                    {
                        cardList.map((photo: Photo, idx: number) => (
                            <Col key={idx} className="pb-3">
                                <Card style={{ width: '20rem'}} className="mx-auto shadow p-3 mb-5 bg-white rounded">
                                    <Card.Img 
                                        variant="top" 
                                        src={
                                            "https://farm" +
                                            photo.farm +
                                            ".staticflickr.com/" +
                                            photo.server +
                                            "/" +
                                            photo.id +
                                            "_" +
                                            photo.secret +
                                            ".jpg"}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {photo.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {photo.description._content}
                                        </Card.Text>
                                        <a
                                            role="button"
                                            href={
                                                "https://www.flickr.com/photos/" + 
                                                photo.owner + 
                                                "/" + 
                                                photo.id} 
                                            target="_blank"
                                            className="explore-btn">
                                                Explore &#8594;
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            : 
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center mt-5 mb-5">
                            <Loader/>
                        </Col>
                    </Row>
                </Container>
        }
    </>
    )
}

export default CardList