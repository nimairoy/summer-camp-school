import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Secret/Secret";
import PopularInstructors from "../pages/PopularInstructors/PopularInstructors/PopularInstructors";
import PopularClasses from "../pages/PopularClasses/PopularClasses";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        },
        {
          path: '/instructors',
          element: <PopularInstructors></PopularInstructors>
        },
        {
          path: '/classes',
          element: <PopularClasses></PopularClasses>
        }
      ]
    },
  ]);

  export default router;