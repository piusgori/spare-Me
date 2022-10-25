import React, { createContext } from "react";

export const CallsContext = createContext();

const CallsContextProvider = ({ children }) => {
    const value = {};
    return (
        <CallsContext.Provider value={value}>{children}</CallsContext.Provider>
    )
};

export default CallsContextProvider;