import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Basket from "../pages/basket/Basket";

export const router = createBrowserRouter([
   {
    path:'/',
    Component:Layout,
    children:[
         {
        path:'/',
        Component:Home
    },{
        path:'/',
        Component:Basket
    }
    ]},
    {
        path:'*',
        Component:NotFound
    }
])