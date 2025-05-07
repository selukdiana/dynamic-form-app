import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

export const getAllEntities = createAsyncThunk('entities/allEntities', async () => {
  const response = await fetch('http://localhost:8080/api/entities');
  const data = await response.json()
  return data
})

export const updateEntity = createAsyncThunk('entities/updateEntity', async ({ id, data }) => {
  const response = await fetch(`http://localhost:8080/api/entity/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const respData = await response.json()
  return respData
})

export const createEntity = createAsyncThunk('entities/updateEntity', async (data) => {
  const response = await fetch(`http://localhost:8080/api/entity`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const respData = await response.json()
  return respData
})


const entitiesSlice = createSlice({
  name: "entities",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllEntities.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(getAllEntities.rejected, (state) => {
      state.data = []
    })
  }
});

export default entitiesSlice.reducer;
