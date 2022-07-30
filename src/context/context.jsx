import { useState, createContext } from "react";

const PortfolioContext = createContext();

const Context = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <PortfolioContext.Provider value={{ showMenu, setShowMenu }}>
            {children}
        </PortfolioContext.Provider>
    )
};

export { Context, PortfolioContext };