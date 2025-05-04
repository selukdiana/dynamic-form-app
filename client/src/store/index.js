import { configureStore } from "@reduxjs/toolkit";
import { entitiesReducer } from "./slices/entitiesSlice";

export default configureStore({
  reducer: {
    entities: entitiesReducer,
  },
});
