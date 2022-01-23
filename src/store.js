import React from "react"
import info from "./reducer/info"
import user from "./reducer/user"

export const storeInitialState = {
    user: user,
    info: info
}

export const DispatchProvider = React.createContext(null)
export const StoreProvider = ({children, initialState = {}}) => {
    // const [store, setStore] = React.useState(() => initialState)
    // const contextValue = React.useMemo(() => [store, setStore], [store])
    // return (
    //     <context.Provider value={contextValue}>
    //         {children}
    //         </context.Provider>
    // )
}