import React, { useState, useMemo, createContext } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [map, setMap] = useState(null);
  const mapProvider = useMemo(() => ({ map, setMap}), [map, setMap]);
  
  return (
    <Context.Provider value={{ ...mapProvider }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;