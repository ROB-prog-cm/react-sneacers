import React from "react";
import logo from '../src/assets/img/image 4.svg'
import icon from '../src/assets/img/Group.svg'
import icon_2 from '../src/assets/img/Union.svg'
import photo from '../src/assets/img/image 5.jpg'
import plus from '../src/assets/img/Group 91.svg'

function App() {
  return (
    <div className='wrapper clear'>
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
      <div className='content p-40'>
        <h1 className='mb-40'>Все кросовки </h1>
        <div className='d-flex'>
          <div className='card'>
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
          <div className='card'>
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
          <div className='card'>
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
          <div className='card'>
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
        </div>

      </div>
    </div>
  );
}

export default App;
