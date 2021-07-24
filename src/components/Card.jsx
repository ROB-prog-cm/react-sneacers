import React from 'react';
import liked from "../assets/img/1.svg.svg";
import photo from "../assets/img/image 5.jpg";
import plus from "../assets/img/Group 91.svg";

const Card = () => {
  return (
    <div className='card'>
      <div className='favorite'>
        <img src={liked} alt=""/>
      </div>
      <img width={133} height={112} src={photo} alt=""/>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Price:</span>
          <b>12000 rub</b>
        </div>
        <button className='button'>
          <img width={11} height={11} src={plus} alt=""/>
        </button>
      </div>
    </div>
  );
};

export default Card;