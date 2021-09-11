import React, {createContext, useState} from "react";

const Context = createContext();

const ContextProvider = ({children}) => {
    const [conteudo, setConteudo] = useState({
        tipo:"alert-info",
        mensagem:<>Seu extrato aparecerá aqui.</>
    });

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