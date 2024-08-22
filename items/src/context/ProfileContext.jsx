/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const DisplayProfileContext = createContext();

export const useDisplayProfile = () => useContext(DisplayProfileContext);

export const DisplayProfileProvider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <DisplayProfileContext.Provider value={{ showProfile, toggleProfile }}>
      {children}
    </DisplayProfileContext.Provider>
  );
};
