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
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03c9d7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSetter, sethemeSetter] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        sethemeSetter(false);
    }

    const setColor = (e) => {
        setCurrentColor(e);
        localStorage.setItem('colorMode', e);
        sethemeSetter(false);
    }

    


   const handleClick = (clicked) => setisClicked({...initialState, [clicked]:true});


    return (
        <StateContext.Provider 
        value={{
            activeMenu, 
            setactiveMenu, 
            isClicked, 
            setisClicked, 
            handleClick, 
            screenSize, 
            setScreenSize,
            currentColor,
            currentMode,
            themeSetter, 
            sethemeSetter,
            setMode, setColor
            }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);