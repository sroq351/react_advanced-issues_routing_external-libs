import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./components/react routing/router-config";

function App() {
  return (
    <div>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
