import { createAction } from '@reduxjs/toolkit'
import { Photo, SearchText } from "../../types"

export const getCards = createAction<SearchText | undefined>('GET_CARDS')

export const setCards = createAction<Photo[]>('SET_CARDS')

export const setSearchText = createAction<string>('SET_SEARCH_TEXT')