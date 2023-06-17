import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Secret/Secret";
import PopularInstructors from "../pages/PopularInstructors/PopularInstructors/PopularInstructors";
import PopularClasses from "../pages/PopularClasses/PopularClasses";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
// import Payment from "../pages/Dashboard/Payment/Payment";

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
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element: <AllUser></AllUser>
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myclasses',
          element: <MyClass></MyClass>
        }
      ]
    }
  ]);

  export default router;