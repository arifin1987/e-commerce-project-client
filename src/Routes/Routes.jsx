import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Carts from "../pages/Carts/Carts";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/trending/:id',
          element: <ViewDetails></ViewDetails>,
          loader:({params})=> fetch( `http://localhost:5000/trending/${params.id}` )
        },
        {
          path:'/carts',
          element: <Carts></Carts>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <Signup></Signup>
        }

      ]
    },
  ]);

  export default router;