import { Children, createContext, useState } from "react";


export const AppContext = createContext();
Children;

export const AppProvider = ({ Children }) => {
    const [user, setUser] = useState("omonbek");

    return(
        <AppProvider.Provider value={{ user, setUser }}>
            {Children}
        </AppProvider.Provider>
    )
}
 
