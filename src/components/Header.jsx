import React from 'react';
import logo from "../assets/img/image 4.svg";
import icon from "../assets/img/Group.svg";
import icon_2 from "../assets/img/Union.svg";
import favorits from '../assets/img/favorits.svg'
import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";

const Header = ({onClickCart}) => {
  const {totalPrice} = useCart()
  return (
    <header className='d-flex justify-between align-center p-40'>
      <Link to={'/'}>
        <div className='d-flex align-center'>
          <img className='' width={40} height={40} src={logo} alt="logo"/>
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин</p>
          </div>
        </div>
      </Link>
      <ul className='d-flex'>
        <li onClick={onClickCart} className='mr-30 cu-p'>
          <img width={18} height={18} src={icon} alt="icon"/>
          <span>{totalPrice} rub</span>
        </li>
        <li className='mr-20 cu-p'>
          <Link to={'/favorites'}>
            <img width={18} height={18} src={favorits} alt="icon"/>
          </Link>
        </li>
        <li>
          <Link to={'/orders'}>
            <img width={18} height={18} src={icon_2} alt="icon"/>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;