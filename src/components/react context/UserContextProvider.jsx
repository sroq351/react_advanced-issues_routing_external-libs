import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "John" });
  };
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };
  console.log("abc");
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
