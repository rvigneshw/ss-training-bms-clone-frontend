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
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        crendentials:'same-origin'
      };

      const responseData = await fetch("/login", requestOptions)
      const response = await responseData.json()
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
      // const response = await axios.post('/login/', data)
      // // const response = await axios.get(`/getMoviesForCity/${id}`);
      console.log(response);
      return response;
    }
);
  
export const getSeatsBookedByUser = createAsyncThunk(
    'getSeatsBookedByUser',
    async (data) => {
      const response = await axios.get('/getSeatsBookedByUser/1')
      // const response = await axios.get(`/getMoviesForCity/${id}`);
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
        state.currentUser = action.payload.data.user;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.currentUser = action.payload.data.user;
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
