import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Card, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
// import {allCities, selectCity,setCities, getAllCities} from '../features/city/citySlice'
// import {selectedCity,moviesInCity,getTheatresForSelectedMovieAsync} from '../redux/reducers/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {selectedCity} from '../redux/reducers/cityReducer';
import {moviesInCity, selectMovie} from '../redux/reducers/movieReducer';
import {seatsBookedDetails,getSeatsBookedByUser,setSeatDetails} from '../redux/reducers/userReducer';


function ListData(){
  const dispatch = useDispatch();
  const [data,setData] = useState();
  useEffect(async ()=>{
    const response = await axios.get('http://localhost:5000/getSeatsBookedByUser/1')
    console.log(response.data.data.Seats)
    // dispatch(setSeatDetails(response.data.data.Seats))
    setData(response.data.data.Seats)
  },[])
  
  
  // const data = useSelector(seatsBookedDetails);
  // const selectedCityID = useSelector(selectedCity)
  

  return <List
  grid={{ gutter: 16, column: 3 }}
  dataSource={data}
  renderItem={item => (
    <List.Item>
      <Card title={item.id}>Card content</Card>
      {/* <Link to="/Screens"><Button onClick={()=>{
        // const movieID = Number(item.id);
        // const cityID = selectedCityID;
        // const data={
        //   cityID:cityID,
        //   movieID:movieID
        // }
        // console.log(cityID);
        // console.log(movieID);
        // dispatch(getTheatresForSelectedMovie(data))
      }}>Select</Button></Link> */}
    </List.Item>
  )}/>;
}

export default function MyTickets(){
    return <div>
        <Header style={{color:'white'}}>Your Bookings</Header>
        <ListData/>
    </div>
}

const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce((obj, key) =>
      (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}