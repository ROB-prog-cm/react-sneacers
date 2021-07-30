import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import {Route} from 'react-router-dom'
import Home from "./pages/Home";
import Favorits from "./pages/Favorits";
import AppContext from "./contex";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/cart')
      const favoritsResponse = await axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/items')

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritsResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj])
    }
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }
  const onAddToFavorites = (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites/${obj.id}`);
      } else {
        axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, obj])
      }
    } catch (error) {
      alert('error favorite')
    }
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded}}>
      <div className='wrapper clear'>
        {cartOpened && <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          onClose={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)}/>
        <Route path={'/'} exact>
          <Home
            cartItems={cartItems}
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onAddToFavorites={onAddToFavorites}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>
        <Route path={'/favorites'} exact>
          <Favorits />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;


/* fetch('https://60fd674c1fa9e90017c70e1f.mockapi.io/items').then((res) => {
       return res.json()
     }).then((json) => {
       setItems(json)
     })*/