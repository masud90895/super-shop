import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import AddToCart from "../Components/AddToCart/AddToCart";
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
import AddProducts from "../Components/Deshboard/Seller/AddProducts";
import MyProducts from "../Components/Deshboard/Seller/MyProducts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/HomePage/Home";
import MyAccount from "../Components/MyAccount/MyAccount";
import SuccessPayment from "../Components/Payment/SuccessPayment";
import TrackOrder from "../Components/TrackOrder/TrackOrder";
import DeshBoardLayout from "../Outlet/DeshBoardLayout";
import Main from "../Outlet/Main";
import AllProduct from "../Components/Deshboard/Admin/AllProduct";

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
          fetch(`https://super-shop-server.vercel.app/product/${params.id}`),
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
        path: "/success",
        element: <SuccessPayment />,
      },
      {
        path: "addtocart",
        element: <AddToCart />,
      },
      {
        path: "myaccount",
        element: <MyAccount />,
      },
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
      {
        path: "addproducts",
        element: <AddProducts />,
      },
      {
        path: "myproducts",
        element: <MyProducts />,
      },
      {
        path: "products",
        element: <AllProduct />,
      }
    ],
  },
]);

export default router;
