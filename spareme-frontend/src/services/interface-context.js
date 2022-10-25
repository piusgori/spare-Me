import React, { createContext, useState } from "react";

export const InterfaceContext = createContext({
    drawerOpen: false,
    setDrawerOpen: null,
});

const InterfaceContextProvider = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const value = {
        drawerOpen,
        setDrawerOpen,
    };
    
    return (
        <InterfaceContext.Provider value={value}>{children}</InterfaceContext.Provider>
    )
};

export default InterfaceContextProvider;