import { useContext, createContext, useMemo, useEffect, useState } from "react";
import type { AppContextTypes } from "../Types/AppContextTypes";

const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const useAppContext = () => {
    const ctx = useContext(AppContext);
    if(!ctx) throw new Error("useAppContext must be used within a AppContextProvider");
    return ctx;
};

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const res = () => setWidth(window.innerWidth)
        window.addEventListener("resize", res)
        return () => window.removeEventListener("resize", res)
    }, [])
    
    const AppContextValues = useMemo(()=> ({
        
        width
    }),[
        
    ])
    
    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    )
}