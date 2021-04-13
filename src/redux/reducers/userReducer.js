import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoggedIn:false,
  currentUser:null,
  seatsBookedDetails:false,
};

export const loginUser = createAsyncThunk(
    'city/login',
    async (data) => {
      const response = await axios.post('http://localhost:5000/login/', data)
      // const response = await axios.get(`http://localhost:5000/getMoviesForCity/${id}`);
      console.log(response);
      return response;
    }
);
  
export const getSeatsBookedByUser = createAsyncThunk(
    'getSeatsBookedByUser',
    async (data) => {
      const response = await axios.get('http://localhost:5000/getSeatsBookedByUser/1')
      // const response = await axios.get(`http://localhost:5000/getMoviesForCity/${id}`);
      console.log(response);
      return response;
    }
);
  
  
export const userSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setSeatDetails: (state, action) => {
      state.seatsBookedDetails = action.payload;
    },
    setCurrentUser: (state,action) => {
        state.currentUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.currentUser = action.payload;
      })
      .addCase(getSeatsBookedByUser.fulfilled, (state, action) => {
        state.seatsBookedDetails = action.payload;
      });
  },
});

export const { setIsLoggedIn, setCurrentUser, setSeatDetails } = userSlice.actions;
export const isLoggedIn = (state) => state.user.isLoggedIn;
export const currentUser = (state) => state.user.currentUser;
export const seatsBookedDetails = (state) => state.user.seatsBookedDetails;
export default userSlice.reducer;
