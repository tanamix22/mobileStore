import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function DataContextProvider ({ children }) {
  const [cartCount, setCartCount] = useState(0)


  const value = { cartCount, setCartCount }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
