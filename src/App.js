import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import {Route} from 'react-router-dom'
import Home from "./pages/Home";
import Favorits from "./pages/Favorits";
import AppContext from "./contex";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritsResponse, itemsResponse] = await Promise.all([
          axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/cart'),
          axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites'),
          axios.get('https://60fd674c1fa9e90017c70e1f.mockapi.io/items')
        ])

        setIsLoading(false)

        setCartItems(cartResponse.data)
        setFavorites(favoritsResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj])
        const {data} = await axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item
        }))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
      await axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/cart/${id}`);
    } catch (error) {
      console.error(error)
    }
  }
  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        await axios.delete(`https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const {data} = await axios.post('https://60fd674c1fa9e90017c70e1f.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {

    }
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToFavorites,
      setCartOpened,
      setCartItems
    }}>
      <div className='wrapper clear'>
        <Drawer
          opened={cartOpened}
          items={cartItems}
          onRemove={onRemoveItem}
          onClose={() => setCartOpened(false)}/>
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
          <Favorits/>
        </Route>
        <Route path={'/orders'} exact>
          <Orders/>
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