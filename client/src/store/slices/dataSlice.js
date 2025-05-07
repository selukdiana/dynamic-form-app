import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  ages: [],
  educations: [],
  codes: []
}

export const getAges = createAsyncThunk('data/ages', async () => {
  const response = await fetch('http://localhost:8080/api/ages')
  const data = await response.json()
  return data
})

export const getEducations = createAsyncThunk('data/educations', async () => {
  const response = await fetch('http://localhost:8080/api/educations')
  const data = await response.json()
  return data
})

export const getPhoneCodes = createAsyncThunk('data/phoneCodes', async () => {
  const response = await fetch('http://localhost:8080/api/phonecodes')
  const data = await response.json()
  return data
})

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAges.fulfilled, (state, action) => {
      state.ages = action.payload
    })
    builder.addCase(getAges.rejected, (state) => {
      state.ages = []
    })
    builder.addCase(getEducations.fulfilled, (state, action) => {
      state.educations = action.payload
    })
    builder.addCase(getEducations.rejected, (state) => {
      state.educations = []
    })
    builder.addCase(getPhoneCodes.fulfilled, (state, action) => {
      state.codes = action.payload
    })
    builder.addCase(getPhoneCodes.rejected, (state) => {
      state.codes = []
    })
  }
})

export default dataSlice.reducer;