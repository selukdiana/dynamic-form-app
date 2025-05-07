import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "./slices/entitiesSlice";
import dataReducer from './slices/dataSlice'

export default configureStore({
  reducer: {
    entities: entitiesReducer,
    data: dataReducer
  },
});
