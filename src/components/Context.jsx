import {createContext, useState } from "react";
import Cookies from "js-cookie"

export const AppContext = createContext()

const ContextProvider = (props) =>{
    const auth = Cookies.get("auth")
    const [authenticated,setAuthenticated] = useState(auth)
    const [savedData,setSavedData] = useState([])
    const [lightmode,setLightMode] = useState(true)
    return(
        <AppContext.Provider value={{lightmode,setLightMode,setSavedData,savedData,setAuthenticated,authenticated}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider

