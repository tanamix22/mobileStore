import { createContext, useState } from "react";


export const GlobalContext = createContext({})

export function DataContextProvider( { children }){
    const [adjustment, setAdjustment ] = useState(window.innerWidth);
    

    const value = {adjustment, setAdjustment};
    

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider> 
    )
}