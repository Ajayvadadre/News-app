import { createContext, useState } from "react";

const ThemeContext = createContext()


const ThemeState = (props) => {

    const [state,setState] = useState({
        mode: "light"
    })

    const update = () => {
        if(state.mode === "light"){
            setState({mode: 'dark'})
        }
        if(state.mode === "dark"){
            setState({mode: 'light'})
        }
    }

    return (
        <ThemeContext.Provider value={{state,update}}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export {ThemeContext, ThemeState}