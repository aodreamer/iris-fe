import React, { createContext, useState } from "react";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");

  return <MapContext.Provider value={{ selectedCity, setSelectedCity }}>{children}</MapContext.Provider>;
};
