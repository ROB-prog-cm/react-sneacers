import React from "react";
import search from '../src/assets/img/serch.svg'
import Index from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import photo_1 from '../src/assets/img/image 5 (3).jpg'
import photo_2 from '../src/assets/img/image 5 (2).jpg'
import photo_3 from '../src/assets/img/image 5 (1).jpg'
import photo_4 from '../src/assets/img/image 5.jpg'


const arr = [
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 5100, image: photo_3},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 3100, image: photo_1},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 6100, image: photo_2},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 8100, image: photo_4},
]

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer/>
      <Header/>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кросовки </h1>
          <div className='searchBlock d-flex'>
            <img src={search} alt=""/>
            <input placeholder='Search...'/>
          </div>
        </div>
        <div className='d-flex'>
          {arr.map(obj => (
            <Index
              onClick={() => console.log(obj)}
              title={obj.title}
              price={obj.price}
              image={obj.image}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
