import { createContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../utils/api";
export const SpecimenContext = createContext(false);

export const SpecimenProvider = ({ children }) => {
  const [specimen, setSpecimen] = useState();

  return (
    <SpecimenContext.Provider value={{ specimen, setSpecimen }}>
      {children}
    </SpecimenContext.Provider>
  );
};

export default SpecimenProvider;
