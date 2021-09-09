import React, {createContext, useState} from "react";

const Context = createContext();

const ContextProvider = ({children}) => {
    const [conteudo, setConteudo] = useState();
    return (
        <Context.Provider 
            value={{   
                conteudo: conteudo,
                setConteudo: setConteudo,
            }}
        >
        {children}
        </Context.Provider>
    )
}

export {ContextProvider};
export default Context;