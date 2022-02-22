import { createReducer } from '@reduxjs/toolkit'
import { getCards, setCards } from "../action-creators"

interface State {
    cardList: any[],
    loading: boolean
}

const initialState: State = {
    cardList: [],
    loading: true
}

const cardListreducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getCards, (state) => {
        state.loading = true
      })
      .addCase(setCards, (state, action) => {
        state.loading = false
        state.cardList = action.payload
      })
  })

export default cardListreducer