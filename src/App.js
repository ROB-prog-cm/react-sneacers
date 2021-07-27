import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import {Route} from 'react-router-dom'
import Home from "./pages/Home";
import Favorits from "./pages/Favorits";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  useEffect(() => {
    axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
    axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites')
      .then((res) => {
        setFavorites(res.data)
      })
    /* fetch('https://60fd674c1fa9e90017c70e1f.mockapi.io/items').then((res) => {
       return res.json()
     }).then((json) => {
       setItems(json)
     })*/
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj])
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }
  const onAddToFavorites = (obj) => {

    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites/${obj.id}`);
    } else {
      axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, obj])
    }
    /*if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites/${obj.id}`);
    } else {
      axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, obj])
    }*/
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer
        items={cartItems}
        onRemove={onRemoveItem}
        onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <Route path={'/'} exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onAddToFavorites={onAddToFavorites}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path={'/favorites'} exact>
        <Favorits
          onAddToFavorites={onAddToFavorites}
          items={favorites}
        />
      </Route>
    </div>
  );
}

export default App;
