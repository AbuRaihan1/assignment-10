import { createContext } from "react";

export const AuthContext = createContext();
export const UserContext = ({ children }) => {
  const authInfo = {
    name: "raihan",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
