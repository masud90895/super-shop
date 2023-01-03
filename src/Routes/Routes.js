import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import AllProducts from "../Components/AllProducts/AllProducts";
import AllProductsDetailes from "../Components/AllProducts/AllProductsDetailes";
import Login from "../Components/Athentication/Login";
import SingUp from "../Components/Athentication/SingUp";
import BecameSeller from "../Components/BecameSeller/BecameSeller";
import AllBuyer from "../Components/Deshboard/Admin/AllBuyer";
import AllSeller from "../Components/Deshboard/Admin/AllSeller";
import ReportedProducts from "../Components/Deshboard/Admin/ReportedProducts";
import SellerRequest from "../Components/Deshboard/Admin/SellerRequest";
import Deshboard from "../Components/Deshboard/Deshboard";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/HomePage/Home";
import SuccessPayment from "../Components/Payment/SuccessPayment";
import TrackOrder from "../Components/TrackOrder/TrackOrder";
import DeshBoardLayout from "../Outlet/DeshBoardLayout";
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
      {
        path : "/success",
        element : <SuccessPayment/>
      }
    ],
  },
  {
    path: "deshboard",
    element: <DeshBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/deshboard",
        element: <Deshboard />,
      },
      {
        path: "allseller",
        element: <AllSeller />,
      },
      {
        path: "allbuyer",
        element: <AllBuyer />,
      },
      {
        path: "sellerrequest",
        element: <SellerRequest />,
      },
      {
        path: "reportedproduct",
        element: <ReportedProducts />,
      },
    ],
  },
]);

export default router;
