import React from 'react';
import esc from "../assets/img/esc.svg";
import photo_2 from "../assets/img/image 5 (1).jpg";
import arrow from "../assets/img/arrow.svg";

const Drawer = () => {
  return (
    <div style={{display: 'none'}} className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30 d-flex justify-between '>Корзина <img className='cu-p removeBtn' src={esc} alt=""/></h2>
        <div className='items'>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: photo_2}}
                 className='cartItemImg'/>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1000</b>
            </div>
            <img className='removeBtn' src={esc} alt=""/>
          </div>
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
          <button className='greenButton'>Оформить <img src={arrow} alt=""/></button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;