import React, {useContext} from 'react';
import search from "../assets/img/serch.svg";
import esc from "../assets/img/esc.svg";
import Card from "../components/Card";
import AppContext from "../contex";

const Home = ({
                cartItems,
                items,
                searchValue,
                setSearchValue,
                onAddToFavorites,
                onChangeSearchInput,
                onAddToCart,
                isLoading
              }) => {
  const {isItemAdded} = useContext(AppContext)
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue))
    return (isLoading ? [...Array(10)] : filtredItems)
      .map((item, index) => (
        <Card
          key={index}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite={(obj) => onAddToFavorites(obj)}
          added={isItemAdded(item.id)}
          {...item}
          loading={isLoading}
        />
      ))
  }
  return (
    <div className='content  p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>{searchValue ? `Search:"${searchValue}"` : 'Все кросовки'}</h1>
        <div className='searchBlock d-flex'>
          <img src={search} alt=""/>
          {searchValue && <img
            onClick={() => setSearchValue('')}
            className='clear '
            src={esc} alt=""/>}
          <input value={searchValue} onChange={onChangeSearchInput} placeholder='Search...'/>
        </div>
      </div>
      <div className='d-flex flex-wrap'>{renderItems()}</div>
    </div>
  );
};

export default Home;