import React, { useEffect } from 'react';
import axios from 'axios';
import { List, Card, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
// import {allCities, selectCity,setCities, getAllCities} from '../features/city/citySlice'
// import {allCities,setCities,selectCityAsync} from '../redux/reducers/reducer';
import {selectCity,setCities,allCities,selectedCity} from '../redux/reducers/cityReducer';
import {getMoviesForSelectedCity} from '../redux/reducers/movieReducer'
import {useDispatch, useSelector} from 'react-redux';



function ListData(){
  const dispatch = useDispatch();
  
  const data = useSelector(allCities);
  useEffect(async ()=>{
    const response = await axios.get("http://localhost:5000/cities");
    dispatch(setCities(response))
    console.log(response)
  },[])
  
    return <List
    grid={{ gutter: 16, column: 3 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.name}>Card content</Card>
        <Link to="/Movies"><Button onClick={()=>{
          dispatch(getMoviesForSelectedCity(item.id))
          dispatch(selectCity(item.id))
        }}>Select</Button></Link>
      </List.Item>
    )}/>;
}

export default function Cities(){
    return <div>
        <Header style={{color:'white'}}>Select City</Header>
        <ListData/>
    </div>
}
