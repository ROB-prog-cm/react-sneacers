import React from 'react';
import esc from "../assets/img/esc.svg";
import arrow from "../assets/img/arrow.svg";
import box from '../assets/img/box.jpg'

const Drawer = ({onClose, onRemove, items = []}) => {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30 d-flex justify-between '>
          Корзина
          <img
            onClick={onClose}
            className='cu-p removeBtn'
            src={esc} alt=""/>
        </h2>
        {items.length > 0 ?
          <div>
            <div className='items'>
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
                  <b>22300</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div/>
                  <b>1000</b>
                </li>
              </ul>
              <button
                className='greenButton'>
                Оформить <img src={arrow} alt=""/></button>
            </div>
          </div>
          :
          <div className='cartEmpty d-flex align-center justify-center flex flex-column'>
            <img className='mb-20' src={box} alt=""/>
            <h2>Корзина пуста</h2>
            <p className='opacity-6'>Добавте товар</p>
            <button className='greenButton'>
              <img onClick={onClose} src={arrow} alt=""/>
              Назад
            </button>
          </div>}
      </div>
    </div>
  );
};

export default Drawer;