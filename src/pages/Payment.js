import { List, Card, Input } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import {selectedSeats,bookSeats} from '../redux/reducers/seatBookingReducer'
;
import { useDispatch, useSelector } from 'react-redux';
export default function Payment(){
  const dispatch = useDispatch();
    const data = useSelector(selectedSeats);
    const price = Number(data.length)*120;
    return <div>
        <Result
    status="success"
    title="Press ok to book the seats"
    subTitle={`Total price ${price}`}
    extra={[
      <Link to="/cities"><Button onClick={()=>{
        dispatch(bookSeats(data))
        // dispatch(setSelectedSeatsAsync(selectedSeats))
      }}>Book</Button></Link>,
      <Button key="/cities">Cancel</Button>,
    ]}
  />
    </div>
}


