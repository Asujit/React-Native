import React, {createContext, useState, useContext} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) =>{
    const [name, setName] = useState("Sujit Auti");

    const newName = (newUser) =>{
        setName(newUser)
    }

    return(
        <UserContext.Provider value={{name, newName}}>
            {children}
        </UserContext.Provider>
    )
}

export const custom = () =>{
    const context = useContext(UserContext);
    if(!context){
        throw new Error("Something went wrong there...")
    }
    return context;
}