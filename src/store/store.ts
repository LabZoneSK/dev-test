import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'

export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch