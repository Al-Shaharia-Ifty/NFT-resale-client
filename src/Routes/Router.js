import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import RequireAuth from "../Layout/ReaquireAuth";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import ItemDetails from "../Pages/ItemDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      {
        path: "/item-details/:id",
        element: (
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        ),
      },
    ],
  },
]);
