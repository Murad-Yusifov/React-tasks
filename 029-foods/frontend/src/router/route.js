import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";
import Admin from "../pages/admin/Admin";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:Layout,
        children:[
             {   path:'/',
                Component:Home
            },
            {   path:'/basket',
                Component:Basket
            },
            {
                path:"/admin",
                Component:Admin

            }
            
        ]
    }, {
        path:'*',
        Component:NotFound
    }
])