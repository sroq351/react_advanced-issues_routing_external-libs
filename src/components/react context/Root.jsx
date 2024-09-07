import { Link, Outlet } from "react-router-dom";
import { UserContextProvider } from "./UserContextProvider";
import { User } from "./User";

export const Root = () => {
  return (
    <div>
      <UserContextProvider>
        <h1> Test app with routing</h1>
        <User />
        <nav>
          <Link to="/"> Home page</Link>
          <Link to="/offer"> Our offer</Link>
          <Link to="/contact"> Contact</Link>
        </nav>
        <Outlet />
        <footer> Our page </footer>
      </UserContextProvider>
    </div>
  );
};
