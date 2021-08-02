import React, {useState} from 'react';
import esc from "../../assets/img/esc.svg";
import arrow from "../../assets/img/arrow.svg";
import shop from '../../assets/img/info.jpg'
import box from '../../assets/img/box.jpg'
import Info from "../info";
import axios from "axios";
import {useCart} from "../../hooks/useCart";
import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({onClose, onRemove, items = [], opened}) => {
  const {setCartItems, cartItems, totalPrice} = useCart()
  const [isComplete, setIsCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/orders',
        {
          items: cartItems
        })
      setOrderId(data.id)
      setIsCompleted(true)
      setCartItems([])
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60fd674c1fa9e90017c70e1f.mockapi.io/cart/' + item.id);
        await delay(1000);
      }

    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}  `}>
      <div className={styles.drawer}>
        <h2 className='mb-30 d-flex justify-between '>
          Корзина
          <img
            onClick={onClose}
            className='cu-p removeBtn'
            src={esc} alt=""/>
        </h2>
        {items.length > 0 ?
          <div className='d-flex flex-column flex'>
            <div className='items flex'>
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div style={{backgroundImage: `url(${obj.image})`}}
                       className='cartItemImg'/>
                  <div className='mr-20 flex'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price} rub</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)}
                       className='removeBtn'
                       src={esc} alt=""/>
                </div>
              ))}
            </div>
            <div className='cartTotalBlock'>
              <ul>
                <li>
                  <span>Итого</span>
                  <div/>
                  <b>{totalPrice}</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div/>
                  <b>{(totalPrice / 100) * 5}</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className='greenButton'>
                Оформить <img src={arrow} alt=""/></button>
            </div>
          </div>
          :
          <Info title={isComplete ? 'Заказ оформлен !' : 'Добавте товар'}
                description={isComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Корзина пуста'}
                image={isComplete ? shop : box}/>
        }
      </div>
    </div>
  );
};

export default Drawer;