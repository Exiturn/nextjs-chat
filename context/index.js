import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
    const [username, setUsername] = useState("");
    const [secret, useSecret] = useState("");

    const value ={
        username,
        setUsername,
        secret,
        useSecret,
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>
}