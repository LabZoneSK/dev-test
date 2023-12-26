import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducer";

const store = configureStore({
  reducer: {
    dataReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
