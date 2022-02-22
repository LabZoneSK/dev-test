import React from 'react'
import { rootReducer } from "./reducers/index"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

export type RootState = ReturnType<typeof store.getState>