import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function DataContextProvider ({ children }) {
  const [cartCount, setCartCount] = useState(0)
  const [orderData, setOrderData] = useState([])

  const value = { cartCount, setCartCount, orderData, setOrderData }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
