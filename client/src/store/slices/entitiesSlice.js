import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const entitiesSlice = createSlice({
  name: "entities",
  initialState: initialState,
  reducers: {},
});

export default entitiesSlice.reducer;
