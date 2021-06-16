import React, { useState, useEffect } from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getEm() {
        if (window.innerWidth < 768) {
            return Math.floor(window.innerWidth / 32);
        } else {
            return Math.floor(window.innerWidth / 192);
        }
    }

    function getIsMobile() {
        return window.innerWidth < 768 ? true : false;
    }

    const [em, setEm] = useState(10);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setEm(getEm());
        setIsMobile(getIsMobile());
    }, []);

    window.addEventListener('resize', () => {
        setEm(getEm());
        setIsMobile(getIsMobile());
    });

    return (
        <Context.Provider value={{ em, isMobile }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };