import { createContext, useState } from "react";

export const PesquisaContext = createContext();

export const PesquisaProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  return (
    <PesquisaContext.Provider value={{ links, setLinks }}>
      {children}
    </PesquisaContext.Provider>
  );
};
