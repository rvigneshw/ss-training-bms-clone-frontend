import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cities: [],
  selectedCity: '',
};

export const selectCityAsync = createAsyncThunk(
    'city/select',
    async (id) => {
      const response = await axios.get(`http://localhost:5000/getMoviesForCity/${id}`);
      console.log(response);
      return {id,response};
    }
);
  
  
export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload.data.data;
    },
    selectCity: (state,action) => {
        state.selectedCity = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(selectCityAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movies = action.payload.response.data.data;
        state.selectedCity = action.payload.id;
      });
  },
});

export const { setCities, selectCity } = citySlice.actions;
export const allCities = (state) => state.city.cities;
export const selectedCity = (state) => state.city.selectedCity;
export default citySlice.reducer;
