import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../../redux/reducers/dataReducer";

export default function createStore() {
  const store = configureStore({
    reducer: {
      dataReducer,
    },
  });

  return store;
}
