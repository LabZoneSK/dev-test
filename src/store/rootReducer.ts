import { combineReducers } from '@reduxjs/toolkit'
import {cardsReducer} from "./card-list/reducer";

export const rootReducer = combineReducers({
    cards: cardsReducer
})

export type RootState = ReturnType<typeof rootReducer>