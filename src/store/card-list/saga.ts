import {put, takeLatest } from 'redux-saga/effects'
import {getCards, setCards} from "./actions";
import {DB} from "../../core/axios";
import {IItems} from "../../models/typings";

type TDataPayload = {
    data:{
        items:IItems[]
    }
}

function* getCardsSaga() {
    try {
        const res: TDataPayload = yield DB.get<{items:IItems}>('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&nojsoncallback=true')
        yield put(setCards(res.data.items))
    } catch (error) {
       console.log('Error')
    }
}

function* cardsSaga() {
    yield takeLatest(getCards.type, getCardsSaga)
}

export default cardsSaga
