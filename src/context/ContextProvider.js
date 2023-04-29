import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfil:false,
    notification:false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const handleClick = (clicked) => setisClicked({...initialState, [clicked]:true});
    const [screenSize, setScreenSize] = useState(undefined);



    return (
        <StateContext.Provider 
        value={{
            activeMenu, 
            setactiveMenu, 
            isClicked, 
            setisClicked, 
            handleClick, 
            screenSize, 
            setScreenSize}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);