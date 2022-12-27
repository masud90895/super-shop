import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../Components/AboutUs/AboutUs"
import BecameSeller from "../Components/BecameSeller/BecameSeller"
import ElectronicCollectionAll from "../Components/ElectronicCollection/ElectronicCollectionAll"
import ElectronicCollectionDetailes from "../Components/ElectronicCollection/ElectronicCollectionDetailes"
import ErrorPage from "../Components/ErrorPage/ErrorPage"
import GlobalProductsAll from "../Components/GlobalProducts/GlobalProductsAll"
import GlobalProductsDetailes from "../Components/GlobalProducts/GlobalProductsDetailes"
import Home from "../Components/HomePage/Home"
import LadiesBagCollectionAll from "../Components/LadiesBagCollection/LadiesBagCollectionAll"
import LadiesBagCollectionDetailes from "../Components/LadiesBagCollection/LadiesBagCollectionDetailes"
import MobailCollectionAll from "../Components/MobailCollection/MobailCollectionAll"
import MobailCollectionDetailes from "../Components/MobailCollection/MobailCollectionDetailes"
import ShareeCollectionAll from "../Components/ShareeCollection/ShareeCollectionAll"
import ShareeCollectionDetailes from "../Components/ShareeCollection/ShareeCollectionDetailes"
import SummerCollectionAll from "../Components/SummerCollection/SummerCollectionAll"
import SummerCollectionDetailes from "../Components/SummerCollection/SummerCollectionDetailes"
import TodaysDealsAll from "../Components/TodaysDeals/TodaysDealsAll"
import TodaysDealsProductsDetailes from "../Components/TodaysDeals/TodaysDealsProductsDetailes"
import WomenCollectionAll from "../Components/WomenCollection/WomenCollectionAll"
import WomenCollectionDetailes from "../Components/WomenCollection/WomenCollectionDetailes"
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
                path:"todaydeals/:id",
                loader:({params})=> fetch(`http://localhost:5000/todayDeals/${params.id}`),
                element: <TodaysDealsProductsDetailes/>
            },
            {
                path: "smartphone",
                element:<MobailCollectionAll/>
            },
            {
                path:"smartphone/:id",
                loader:({params})=> fetch(`http://localhost:5000/smartphone/${params.id}`),
                element: <MobailCollectionDetailes/>
            },
            {
                path: "summer",
                element:<SummerCollectionAll/>
            },
            {
                path:"summer/:id",
                loader:({params})=> fetch(`http://localhost:5000/summer/${params.id}`),
                element: <SummerCollectionDetailes/>
            },
            {
                path: "electronic",
                element:<ElectronicCollectionAll/>
            },
            {
                path:"electronic/:id",
                loader:({params})=> fetch(`http://localhost:5000/electronic/${params.id}`),
                element: <ElectronicCollectionDetailes/>
            },
            {
                path: "women",
                element:<WomenCollectionAll/>
            },
            {
                path:"women/:id",
                loader:({params})=> fetch(`http://localhost:5000/women/${params.id}`),
                element: <WomenCollectionDetailes/>
            },
            {
                path: "ladiesBag",
                element:<LadiesBagCollectionAll/>
            },
            {
                path:"ladiesBag/:id",
                loader:({params})=> fetch(`http://localhost:5000/ladiesBag/${params.id}`),
                element: <LadiesBagCollectionDetailes/>
            },
            {
                path: "globalProducts",
                element:<GlobalProductsAll/>
            },
            {
                path:"globalProducts/:id",
                loader:({params})=> fetch(`http://localhost:5000/globalProducts/${params.id}`),
                element: <GlobalProductsDetailes/>
            },
            {
                path: "sharee",
                element:<ShareeCollectionAll/>
            },
            {
                path:"sharee/:id",
                loader:({params})=> fetch(`http://localhost:5000/sharee/${params.id}`),
                element: <ShareeCollectionDetailes/>
            },


        ]
    }
  ])

  export default router