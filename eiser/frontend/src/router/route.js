import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Basket from "../pages/basket/Basket";
import Detailed from "../pages/detailed/Detailed";
import Wish from "../pages/wish/Wish";
import Admin from "../pages/admin/Admin";

export const router = createBrowserRouter([
   {
    path:'/',
    Component:Layout,
    children:[
         {
        path:'/',
        Component:Home
    },{
        path:'/basket',
        Component:Basket
    },{
        path:'/product/:id',
        Component:Detailed
    },{
        path:'/wish',
        Component:Wish
    }, {
        path:"/admin",
        Component:Admin
    }
    ]},
    {
        path:'*',
        Component:NotFound
    }
])