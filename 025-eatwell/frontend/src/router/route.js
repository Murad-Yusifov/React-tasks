import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";


export const route = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home,
            }
        ]},
        {
            path:'*',
            Component: NotFound
        }
    
    
])