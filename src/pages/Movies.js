import React, { useEffect } from 'react';
import axios from 'axios';
import { List, Card, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
// import {allCities, selectCity,setCities, getAllCities} from '../features/city/citySlice'
// import {selectedCity,moviesInCity,getTheatresForSelectedMovieAsync} from '../redux/reducers/reducer';
import {useDispatch, useSelector} from 'react-redux';
import {selectedCity} from '../redux/reducers/cityReducer';
import {moviesInCity, selectMovie} from '../redux/reducers/movieReducer';
import {getTheatresForSelectedMovie} from '../redux/reducers/theatreHallReducer';


function ListData(){
  const dispatch = useDispatch();
  
  const data = useSelector(moviesInCity);
  const selectedCityID = useSelector(selectedCity)
  var moviesList = [];
  let moviesArraywithMetaData = [];
  data.forEach(element => {
    const movieName = element['Screens.Shows.Movie.name'];
    if(!moviesList.includes(movieName)){
      moviesList.push(movieName);
      moviesArraywithMetaData.push(
        {
          id:element['Screens.Shows.Movie.id'],
          name:movieName
        }
      )
    }
  });
  console.log(moviesArraywithMetaData)
  

  return <List
  grid={{ gutter: 16, column: 3 }}
  dataSource={moviesArraywithMetaData}
  renderItem={item => (
    <List.Item>
      <Card title={item.name}>Card content</Card>
      <Link to="/Screens"><Button onClick={()=>{
        const movieID = Number(item.id);
        const cityID = selectedCityID;
        const data={
          cityID:cityID,
          movieID:movieID
        }
        console.log(cityID);
        console.log(movieID);
        dispatch(getTheatresForSelectedMovie(data))
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

const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce((obj, key) =>
      (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}