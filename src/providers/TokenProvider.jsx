import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useTokenContext = () => useContext(AppContext);

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState();
  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
}

export default TokenProvider;