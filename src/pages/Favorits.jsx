import React, {useContext} from 'react';
import Card from "../components/Card/Cart";
import AppContext from "../contex";

const Favorits = ({}) => {
  const {favorites, onAddToFavorites} = useContext(AppContext)
  return (
    <div className='content  p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Закладки !</h1>
      </div>
      <div className='d-flex flex-wrap'>
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorites}
            {...item}/>
        ))}
      </div>
    </div>
  );
};


export default Favorits;