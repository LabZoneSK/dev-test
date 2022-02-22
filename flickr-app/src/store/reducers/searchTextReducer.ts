import { createReducer } from '@reduxjs/toolkit'
import { setSearchText } from "../action-creators"

interface State {
    searchText: string
}

const initialState: State = {
    searchText: ""
}

const searchTextreducer = createReducer(initialState, (builder) => {
    builder
      .addCase(setSearchText, (state, action) => {
        state.searchText = action.payload
      })
  })

export default searchTextreducer