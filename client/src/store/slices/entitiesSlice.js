import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{
    id: 1,
    name: 'Diana',
    surname: 'Selyuk',
    email: 'aa@gmail.com',
    education: 'higher',
    location: 'Minsk',
    age: '18-25',
    isPhoneNumber: 'on',
    phoneNumber: {
      code: '+375',
      number: '44111111'
    }

  },
  {
    id: 2,
    name: 'Vasya',
    surname: 'Pupkin',
    email: '123gj@gmail.com',
    education: 'primary',
    location: 'Minsk',
    age: '51+',
    isPhoneNumber: 'on',
    phoneNumber: {
      code: '+7',
      number: '291808700'
    }
  }]
};

const entitiesSlice = createSlice({
  name: "entities",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.data.push({ ...action.payload, id: state.data.length + 1 })
    },
    edit: (state, action) => {
      const index = state.data.findIndex(elem => elem.id == action.payload.id);
      state.data[index] = action.payload.data;
    }
  },
});

export default entitiesSlice.reducer;
export const { add, edit } = entitiesSlice.actions
