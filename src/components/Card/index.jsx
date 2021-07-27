import React, {useState} from 'react';
import onLiked from "../../assets/img/1.svg.svg";
import Liked from "../../assets/img/liked.svg";
import plus from "../../assets/img/plus.svg";
import ok from '../../assets/img/ok.svg'
import styles from './Card.module.scss'

const Card = ({
                id,
                title,
                price,
                image,
                onFavorite,
                onPlus,
                favorited = false
              }) => {
  console.log(favorited)
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const onClickPlus = () => {
    onPlus({title, price, image})
    setIsAdded(!isAdded)
  }
  const onClickFavorite = () => {
    onFavorite({id, title, price, image})
    setIsFavorite(!isFavorite)
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? Liked : onLiked} alt=""/>
      </div>
      <img width={133} height={112} src={image} alt=""/>
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Price:</span>
          <b>{price} rub</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? ok : plus} alt="Plus"/>
      </div>
    </div>
  );
};

export default Card;