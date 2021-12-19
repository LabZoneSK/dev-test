import { createReducer } from '@reduxjs/toolkit'
import { getCards, setCards } from "./actions";

export type TStateJobsListReducer = {
    cards: any[],
    loading: boolean
}

const initialState: TStateJobsListReducer = {
    cards: [],
    loading: false
}

export const cardsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCards, (state) => {
            state.loading = true
        })
        .addCase(setCards, (state, { payload }) => {
            state.cards = payload
            state.loading = false
        })
})