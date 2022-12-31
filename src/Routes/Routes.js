import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import AllProducts from "../Components/AllProducts/AllProducts";
import AllProductsDetailes from "../Components/AllProducts/AllProductsDetailes";
import Login from "../Components/Athentication/Login";
import SingUp from "../Components/Athentication/SingUp";
import BecameSeller from "../Components/BecameSeller/BecameSeller";
import Deshboard from "../Components/Deshboard/Deshboard";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/HomePage/Home";
import TrackOrder from "../Components/TrackOrder/TrackOrder";
import Main from "../Outlet/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "becameseller",
        element: <BecameSeller />,
      },
      {
        path: "/:category",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <AllProductsDetailes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SingUp />,
      },
      {
        path: "trackOrder",
        element: <TrackOrder />,
      },
    ],
  },
  {
    path: "deshboard",
    element: <Deshboard />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
