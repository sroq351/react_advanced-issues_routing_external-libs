import { UserContext } from "./UserContextProvider";
import { useContext } from "react";

export const User = () => {
  const { user, login, logout } = useContext(UserContext);
  if (!user?.name) {
    return <button onClick={login}>login</button>;
  }
  return (
    <div>
      <span> Hello, {user.name}</span>
      <button onClick={logout}> logout</button>
    </div>
  );
};
