import { createContext, useState } from "react"




export const Context = createContext()

export const ContextProvider = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [access, setAccess] = useState('')

    return(
        <Context.Provider value={{loading, setLoading, access, setAccess}}>
            {children}
        </Context.Provider>
    )
}