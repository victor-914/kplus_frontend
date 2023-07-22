import { createContext, useState, useEffect } from "react";
export const SpecimenContext = createContext(false);

export const SpecimenProvider = ({ children }) => {
  const [house, setHouse] = useState([]);
  const [land, setLand] = useState([]);

  return (
    <SpecimenContext.Provider value={{ house, land, setLand, setHouse }}>
      {children}
    </SpecimenContext.Provider>
  );
};

export default SpecimenProvider;
