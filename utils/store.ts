import { createContext, useReducer } from 'react'
import styled from 'styled-components'

export const Store = createContext()

const initialState = {
  cart: { cartItems: [] }
}

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD-ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        item => item.slug === newItem.slug
      )
      const cartItems = existItem
        ? state.cart.cartItems.map(item =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    default:
      return state
  }
}

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch}

  return <Store.Provider value={value}>{children} </Store.Provider>
}

export default Storeprovider