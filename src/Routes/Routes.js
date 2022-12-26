import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../Components/AboutUs/AboutUs"
import BecameSeller from "../Components/BecameSeller/BecameSeller"
import ErrorPage from "../Components/ErrorPage/ErrorPage"
import Home from "../Components/HomePage/Home"
import TodaysDealsAll from "../Components/TodaysDeals/TodaysDealsAll"
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
            }
        ]
    }
  ])

  export default router