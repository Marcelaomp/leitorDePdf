import { ContextProvider } from "./conteudo";

const GlobalContext = ({children}) => {
    return <ContextProvider>{children}</ContextProvider>
};

export default GlobalContext;