import { createAction } from '@reduxjs/toolkit'

import {IItems} from "../../models/typings";

export const getCards = createAction('GET_CARDS')

export const setCards = createAction<IItems[]>('SET_CARDS')
