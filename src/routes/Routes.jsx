import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import PopularInstructors from "../pages/PopularInstructors/PopularInstructors/PopularInstructors";
import PopularClasses from "../pages/PopularClasses/PopularClasses";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import AdminRoutes from "./AdminRoutes";
import Checkout from "../pages/Dashboard/Payment/Checkout";
import Payment from "../pages/Dashboard/Payment/Payment";
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
          path: 'payment/:id',
          element: <Payment></Payment>,
          loader: ({params}) => fetch(`https://yoga-camp-server.vercel.app/carts/${params.id}`)
        },
        {
          path: 'checkout',
          element: <Checkout></Checkout>
        },
        //admin route
        {
          path: 'allusers',
          element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
        },
        {
          path: 'manageclasses',
          element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
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