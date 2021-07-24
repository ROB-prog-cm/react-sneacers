import React from 'react';
import logo from "../assets/img/image 4.svg";
import icon from "../assets/img/Group.svg";
import icon_2 from "../assets/img/Union.svg";

const Header = () => {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <img className='' width={40} height={40} src={logo} alt="logo"/>
        <div>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p className='opacity-5'>Магазин</p>
        </div>
      </div>
      <ul className='d-flex'>
        <li className='mr-30'>
          <img width={18} height={18} src={icon} alt="icon"/>
          <span>1200 rub</span>
        </li>
        <li>
          <img width={18} height={18} src={icon_2} alt="icon"/>
        </li>
      </ul>
    </header>
  );
};

export default Header;