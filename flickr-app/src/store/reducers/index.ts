import { combineReducers } from "redux"
import cardListReducer from "./cardListReducer"
import searchTextReducer from "./searchTextReducer"

export const rootReducer = combineReducers({
    cardList: cardListReducer,
    searchText : searchTextReducer
})

export type RootState = ReturnType<typeof rootReducer>