import { createContext, useContext, useState } from "react";

const HeaderContext =createContext()

export const HeaderProvider =({children})=>{
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);
    return (
        <HeaderContext.Provider value={{isOpen, openMenu, closeMenu}} >
            {children}
        </HeaderContext.Provider>
    )
}

export const useHeader =()=>useContext(HeaderContext)