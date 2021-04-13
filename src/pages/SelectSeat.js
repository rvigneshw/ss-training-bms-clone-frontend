import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Card, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
// import {allCities, selectCity,setCities, getAllCities} from '../features/city/citySlice'
// import {theatreHalls,moviesInCity,getTheatresForSelectedMovieAsync} from '../redux/reducers/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {theatreHalls} from '../redux/reducers/theatreHallReducer';
import { seatDetails, bookSeats, setSelectedSeatsAsync} from '../redux/reducers/seatBookingReducer';
import { Checkbox } from 'antd';


function ListData(){
  
  // const data = useSelector(moviesInCity);
  const data = useSelector(seatDetails);
  const dispatch = useDispatch();

  console.log(data);
  const [selectedSeats,setSelectedSeats]=useState([]);
  console.log(selectedSeats);

  const handleRemoveItem = (id) => {
    setSelectedSeats(selectedSeats.filter(item => item !== id));
  };
  function onChange(e) {
    console.log(e.target);
    if(e.target.checked){
      setSelectedSeats([...selectedSeats,e.target.value]);
    }else{
      setSelectedSeats(selectedSeats.filter(item => item !== e.target.value));
    }
  }
  
  

  return <><List
  grid={{ gutter: 16, column: 3 }}
  dataSource={data}
  renderItem={item => (
    <List.Item>
      {
        item.status=="available"?
        <Checkbox value={item.id} onChange={onChange}>
        {item.seatNumber}
        </Checkbox>
        :
        <Checkbox value={item.id} onChange={onChange} disabled>
          {item.seatNumber}
        </Checkbox>
      }
      
    </List.Item>
  )}/>
  <Link to="/Payment"><Button onClick={()=>{
    // dispatch(bookSeats(selectedSeats))
    dispatch(setSelectedSeatsAsync(selectedSeats))
  }}>Book</Button></Link>
  </>;
}

export default function SelectSeat(){

    return <div>
        <Header style={{color:'white'}}>Select Seats</Header>
        <ListData/>
        
    </div>
}

