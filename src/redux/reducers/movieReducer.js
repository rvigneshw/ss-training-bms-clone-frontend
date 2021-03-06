import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  selectedMovie: ''
};
  
export const getMoviesForSelectedCity = createAsyncThunk(
    'getMoviesForSelectedCity',
    async (id) => {
      const response = await axios.get(`/getMoviesForCity/${id}`);
      console.log(response);
      return {id,response};
    }
);

export const movieSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectMovie: (state,action) => {
        state.selectedMovie = action.payload;
    }
  },
  // The `reducers` field lets us define reducers and generate associated actions
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesForSelectedCity.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movies = action.payload.response.data.data;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const { selectMovie } = movieSlice.actions;
export const moviesInCity = (state) => state.movie.movies;
export default movieSlice.reducer;
