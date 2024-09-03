import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import InfoHeader from "./components/InfoHeader";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
