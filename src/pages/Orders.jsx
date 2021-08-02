import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Cart";
import axios from "axios";

const Orders = ({}) => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/orders')
        //setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setOrders(data);
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <div className='content  p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Мои Заказы !</h1>
      </div>
      <div className='d-flex flex-wrap'>
        {(isLoading ? [...Array(5)] : orders).map((item, index) => (
          <Card key={index}{...item} loading={isLoading}/>
        ))}
      </div>
    </div>
  );
};


export default Orders;