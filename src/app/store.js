import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/reducer';
import movieReducer from '../redux/reducers/movieReducer';
import cityReducer from '../redux/reducers/cityReducer';
import theatreHallReducer from '../redux/reducers/theatreHallReducer';
import seatBookingReducer from '../redux/reducers/seatBookingReducer';
import userReducer from '../redux/reducers/userReducer';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    movie: movieReducer,
    theatreHall:theatreHallReducer,
    seatBoooking:seatBookingReducer,
    user:userReducer
  },
});
