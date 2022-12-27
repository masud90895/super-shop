import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../Components/AboutUs/AboutUs"
import BecameSeller from "../Components/BecameSeller/BecameSeller"
import ErrorPage from "../Components/ErrorPage/ErrorPage"
import Home from "../Components/HomePage/Home"
import TodaysDealsAll from "../Components/TodaysDeals/TodaysDealsAll"
import TodaysDealsProductsDetailes from "../Components/TodaysDeals/TodaysDealsProductsDetailes"
import Main from "../Outlet/Main"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"about",
                element: <AboutUs/>
            },
            {
                path: "becameseller",
                element: <BecameSeller/>
            },
            {
                path: "todaydeals",
                element:<TodaysDealsAll/>
            },
            {
                path:"products/:id",
                loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`),
                element: <TodaysDealsProductsDetailes/>
            }

        ]
    }
  ])

  export default router