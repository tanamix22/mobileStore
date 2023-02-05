import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function DataContextProvider ({ children }) {
  const [adjustment, setAdjustment] = useState(window.innerWidth)
  const [cartCount, setCartCount] = useState(0)


  const value = { adjustment, setAdjustment, cartCount, setCartCount }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
