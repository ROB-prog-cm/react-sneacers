import React from 'react';
import liked from "../../assets/img/1.svg.svg";
import plus from "../../assets/img/plus.svg";
import styles from './Card.module.scss'

console.log(styles)
const Index = ({title, price, image,onClick}) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={liked} alt=""/>
      </div>
      <img width={133} height={112} src={image} alt=""/>
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Price:</span>
          <b>{price} rub</b>
        </div>
        <button onClick={onClick} className='button'>
          <img width={11} height={11} src={plus} alt=""/>
        </button>
      </div>
    </div>
  );
};

export default Index;