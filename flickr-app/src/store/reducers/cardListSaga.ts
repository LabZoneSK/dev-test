import {put, takeLatest } from 'redux-saga/effects'
import {getCards, setCards} from "../action-creators";
import axios from 'axios'
import { Photo } from "../../types"

const db = axios.create({
    withCredentials: false,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'get',
    timeout: 10000000
})

type DataPayload = {
    data:{
        photos: {
            photo: Photo[]
        }
    }
}

interface Action {
    type: string,
    payload: {
        searchText: string
    }
}

const HOST_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_KEY}&format=json&extras=description&nojsoncallback=1&per_page=18&page=`

function* getCardListSaga(action: Action) {
    try {
        const tag = action.payload !== undefined && action.payload.searchText !== "" ? action.payload.searchText : "finland"

        const res: DataPayload = yield db.get<{photos:Photo}>(HOST_URL + `&tags=${tag}`)
        yield put(setCards(res.data.photos.photo)) 
    } catch (error) {
       console.log('Error while fetching data!')
    }
}

function* cardListSaga() {
    yield takeLatest(getCards.type, getCardListSaga)
}

export default cardListSaga