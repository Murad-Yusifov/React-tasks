import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import Basket from "../pages/Basket";
import Admin from "../pages/admin/Admin";


export const route = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path:"/admin",
                element:Admin
            },
            {
                path:"/basket",
                element:Basket
            },
        ]},
        {
            path:'*',
            Component: NotFound
        }
    
    
])