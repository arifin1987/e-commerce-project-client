import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

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
        }

      ]
    },
  ]);

  export default router;