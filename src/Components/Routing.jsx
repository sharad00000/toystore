import { createBrowserRouter } from "react-router-dom";
import Materialui from "./materialui";
import Registration from "./Registration";
import MenuAppBar from "./Navbar";
import About from "./Aboutpage";
import Home from "./Homepageback";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Materialui /> },
  { path: "/SignUp", element: <Registration /> },
  { path: "/About", element: <About/> },

]);

export default router;