import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../Components/ErrorPage/ErrorPage"
import Home from "../Components/HomePage/Home"
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
            }
        ]
    }
  ])

  export default router