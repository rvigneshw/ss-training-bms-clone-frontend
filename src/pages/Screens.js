import React, { useEffect } from 'react';
import axios from 'axios';
import { List, Card, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
// import {allCities, selectCity,setCities, getAllCities} from '../features/city/citySlice'
// import {theatreHalls,moviesInCity,getTheatresForSelectedMovieAsync} from '../redux/reducers/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {theatreHalls} from '../redux/reducers/theatreHallReducer'
import {getSeatsForTheSelectedShow} from '../redux/reducers/seatBookingReducer'


function ListData(){
  const dispatch = useDispatch();
  
  // const data = useSelector(moviesInCity);
  const data = useSelector(theatreHalls);
  console.log(data);
  // var moviesList = [];
  // let moviesArraywithMetaData = [];
  // data.forEach(element => {
  //   const movieName = element['Screens.Shows.Movie.name'];
  //   if(!moviesList.includes(movieName)){
  //     moviesList.push(movieName);
  //     moviesArraywithMetaData.push(
  //       {
  //         id:element['Screens.Shows.Movie.id'],
  //         name:movieName
  //       }
  //     )
  //   }
  // });
  // console.log(moviesArraywithMetaData)
  

  return <List
  grid={{ gutter: 16, column: 3 }}
  dataSource={data}
  renderItem={item => (
    <List.Item>
      <Card title={item.name}>
        {item['Screens.name']} <br></br>
        {item['Screens.Shows.name']} <br></br>
        {item['Screens.Shows.Movie.name']} <br></br>
      </Card>
      <Link to="/SelectSeat"><Button onClick={()=>{
        dispatch(getSeatsForTheSelectedShow(item['Screens.Shows.id']))
      }}>Select</Button></Link>
    </List.Item>
  )}/>;
}

export default function Cities(){
    return <div>
        <Header style={{color:'white'}}>Select Movie</Header>
        <ListData/>
    </div>
}

