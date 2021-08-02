import React, {useContext, useState} from 'react';
import onLiked from "../../assets/img/1.svg.svg";
import Liked from "../../assets/img/liked.svg";
import plus from "../../assets/img/plus.svg";
import ok from '../../assets/img/ok.svg'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader";
import AppContext from "../../contex";

const Card = ({
                id,
                title,
                price,
                image,
                onFavorite,
                onPlus,
                favorited = false,
                loading = false
              }) => {
  const {isItemAdded} = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const obj = {id, parentId: id, title, price, image}

  const onClickPlus = () => {
    onPlus(obj)
  }
  const onClickFavorite = () => {
    onFavorite(obj)
    setIsFavorite(!isFavorite)
  }
  return (
    <div className={styles.card}>
      {
        loading ?
          <ContentLoader
            speed={2}
            width={155}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155"/>
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25"/>
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
          </ContentLoader>
          :
          <>
            {onFavorite && <div className={styles.favorite} onClick={onFavorite}>
              <img
                onClick={onClickFavorite}
                src={isFavorite ? Liked : onLiked} alt=""/>
            </div>}
            <img width='100%' height={135} src={image} alt=""/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>{price} rub</b>
              </div>
              {onPlus && <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? ok : plus} alt="Plus"/>}
            </div>
          </>
      }
    </div>
  );
}

export default Card;