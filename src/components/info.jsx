import React, {useContext} from 'react';
import box from "../assets/img/box.jpg";
import AppContext from "../contex";
import arrow from '../assets/img/arrow.svg'

const Info = ({image, title, description}) => {
  const {setCartOpened, setCartItems} = useContext(AppContext)
  return (
    <div className='cartEmpty d-flex align-center justify-center flex flex-column'>
      <img className='mb-20' src={image} alt=""/>
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <button className='greenButton'>
        <img onClick={() => setCartOpened} src={arrow} alt=""/>
        Назад
      </button>
    </div>
  );
};

export default Info;